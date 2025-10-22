'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { uploadToCloudinary } from '@/lib/cloudinary'
import { addConferenceRegistration } from '@/lib/api-calls'
import Step1Personal from '@/components/registration/Step1Personal'
import Step2Participation from '@/components/registration/Step2Participation'
import Step3Background from '@/components/registration/Step3Background'
import Step4Intentions from '@/components/registration/Step4Intentions'
import Step5Consent from '@/components/registration/Step5Consent'

interface FormData {
  // Section 1: Personal Information
  firstName: string
  lastName: string
  gender: string
  phoneNumber: string
  email: string
  countryOfResidence: string
  location: string
  ageRange: string

  // Section 2: Conference Participation
  joiningFromOutsideNigeria: string
  day1Attendance: string
  day2Attendance: string

  // Section 3: Background & Interests
  currentRole: string
  seniorityLevel: string
  organizationName: string
  sector: string[]
  areasOfInterest: string[]
  languagesSpoken: string[]
  socialMediaHandle: string
  profilePhoto: File | null

  // Section 4: Intentions, Access & Engagement
  category: string
  professionalBackground: string
  reasonsForAttending: string[]
  howDidYouHear: string
  accessibilityNeeds: string
  futureEngagement: string[]

  // Section 5: Consent
  consent: boolean
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  countryOfResidence: '',
  phoneNumber: '',
  gender: '',
  location: '',
  ageRange: '',
  joiningFromOutsideNigeria: '',
  day1Attendance: '',
  day2Attendance: '',
  currentRole: '',
  seniorityLevel: '',
  organizationName: '',
  sector: [],
  areasOfInterest: [],
  languagesSpoken: [],
  socialMediaHandle: '',
  category: '',
  professionalBackground: '',
  reasonsForAttending: [],
  howDidYouHear: '',
  accessibilityNeeds: '',
  futureEngagement: [],
  consent: false,
  profilePhoto: null,
}

export default function ConferenceRegistrationForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false)
  const [uploadProgress, setUploadProgress] = useState('')

  // Wizard state
  const [currentStep, setCurrentStep] = useState<number>(1)
  const totalSteps = 5

  const stepFieldRequirements: Record<number, (keyof FormData)[]> = {
    1: ['firstName', 'lastName', 'gender', 'phoneNumber', 'email', 'countryOfResidence', 'location', 'ageRange'],
    2: ['joiningFromOutsideNigeria', 'day1Attendance', 'day2Attendance'],
    3: ['currentRole', 'seniorityLevel', 'organizationName', 'sector', 'areasOfInterest', 'languagesSpoken'],
    4: ['category', 'professionalBackground', 'reasonsForAttending', 'howDidYouHear'],
    5: ['consent'],
  }

  const validateStep = (step: number): boolean => {
    const fields = stepFieldRequirements[step] || []
    const newErrors: Record<string, string> = {}
    fields.forEach(field => {
      const value = formData[field]
      if (!value || (Array.isArray(value) && value.length === 0)) {
        newErrors[field] = 'This field is required'
      }
    })
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      if (fields.includes('email')) newErrors.email = 'Please enter a valid email address'
    }
    setErrors(prev => ({ ...prev, ...newErrors }))
    return Object.keys(newErrors).length === 0
  }

  const goNext = () => {
    if (validateStep(currentStep)) setCurrentStep(prev => Math.min(prev + 1, totalSteps))
  }
  const goBack = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleArrayChange = (field: keyof FormData, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }))
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Required fields validation
    const requiredFields: (keyof FormData)[] = [
      'firstName', 'lastName', 'phoneNumber', 'email', 'countryOfResidence',
      'location', 'ageRange', 'joiningFromOutsideNigeria',
      'day1Attendance', 'day2Attendance', 'currentRole', 'seniorityLevel',
      'organizationName', 'sector', 'areasOfInterest', 'languagesSpoken',
      'category', 'professionalBackground', 'reasonsForAttending', 'howDidYouHear',
      'consent'
    ]

    requiredFields.forEach(field => {
      const value = formData[field]
      if (!value || (Array.isArray(value) && value.length === 0)) {
        newErrors[field] = 'This field is required'
      }
    })

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Upload profile photo to Cloudinary if present
      let profilePhotoUrl = ''
      let profilePhotoPublicId = ''
      
      if (formData.profilePhoto) {
        setIsUploadingPhoto(true)
        setUploadProgress('Uploading profile photo...')
        
        const uploadResult = await uploadToCloudinary(formData.profilePhoto, {
          folder: 'voa-conference-2025/profiles'
        })
        
        if (uploadResult.success && uploadResult.url) {
          profilePhotoUrl = uploadResult.url
          profilePhotoPublicId = uploadResult.publicId || ''
          setUploadProgress('Profile photo uploaded successfully!')
        } else {
          throw new Error(uploadResult.error || 'Failed to upload profile photo')
        }
        
        setIsUploadingPhoto(false)
        setUploadProgress('')
      }

      // Prepare form data for submission - matching initialFormData arrangement
      const submissionData = {
        // Section 1: Personal Information
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        countryOfResidence: formData.countryOfResidence,
        phoneNumber: formData.phoneNumber,
        location: formData.location,
        gender: formData.gender,
        ageRange: formData.ageRange,

        // Section 2: Conference Participation
        joiningFromOutsideNigeria: formData.joiningFromOutsideNigeria,
        day1Attendance: formData.day1Attendance,
        day2Attendance: formData.day2Attendance,

        // Section 3: Background & Interests
        currentRole: formData.currentRole,
        seniorityLevel: formData.seniorityLevel,
        organizationName: formData.organizationName,
        sector: formData.sector.join(', '),
        areasOfInterest: formData.areasOfInterest.join(', '),
        languagesSpoken: formData.languagesSpoken.join(', '),
        socialMediaHandle: formData.socialMediaHandle,
        category: formData.category,
        professionalBackground: formData.professionalBackground,
        reasonsForAttending: formData.reasonsForAttending.join(', '),
        howDidYouHear: formData.howDidYouHear,
        accessibilityNeeds: formData.accessibilityNeeds,
        futureEngagement: formData.futureEngagement.join(', '),
        consent: formData.consent,
        profilePhotoUrl: profilePhotoUrl,
        profilePhotoPublicId: profilePhotoPublicId,
        profilePhotoName: formData.profilePhoto?.name || '',
        
        // Add timestamp
        submittedAt: new Date().toISOString(),
      }

      // Log the data being sent for debugging
      console.log('Data being sent to API:', submissionData)
      console.log('Data size:', JSON.stringify(submissionData).length, 'characters')

      const { data, error, validationErrors } = await addConferenceRegistration(submissionData)
      console.log('Response from API:', { data, error, validationErrors })

      if (validationErrors?.length) {
        // Handle validation errors
        const newErrors: Record<string, string> = {}
        validationErrors.forEach(validationError => {
          newErrors[validationError.field] = validationError.message
        })
        setErrors(newErrors)
        return
      }

      if (error) {
        console.log("response error: ", error.message)
        if (error.message === "A registration with this email already exists") {
          setErrors({ email: "A registration with this email already exists" })
          return
        }

        throw new Error(error.message || 'Failed to submit registration.')
      }

      if (data) {
        setSubmitStatus('success')
        // Reset form after successful submission
        setFormData(initialFormData)
        setErrors({})
        console.log('Registration successful with code:', data.registrationCode)
      }

      
    } catch (error) {
      // console.log('CORS request failed, trying no-cors mode:', error)
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setIsUploadingPhoto(false)
      setUploadProgress('')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Helper function to validate file before upload
  const validateFile = (file: File): string | null => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (!allowedTypes.includes(file.type)) {
      return 'Please upload a JPEG, PNG, GIF, or WebP image.'
    }

    if (file.size > maxSize) {
      return 'File size must be less than 5MB.'
    }

    return null
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    
    if (file) {
      const validationError = validateFile(file)
      if (validationError) {
        setErrors(prev => ({ ...prev, profilePhoto: validationError }))
        return
      }
    }
    
    setFormData(prev => ({ ...prev, profilePhoto: file }))
    // Clear any existing error
    if (errors.profilePhoto) {
      setErrors(prev => ({ ...prev, profilePhoto: '' }))
    }
  }

  return (
    <div className="text-base">
      {/* Hero Section */}
      <section className="relative text-white min-h-[50vh] bg-gradient-to-r from-black via-black/80 to-transparent">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/narrative.png"
            alt="African People in Conference Discussion"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-10 pb-16">
          <div className="max-w-4xl">
            <p className="text-[#E0B500] font-semibold text-sm mb-4">AFRICA CONFERENCE 2025</p>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-2">
              🌍 Registration Form (Bilingual)
            </h1>
            

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 max-w-3xl">
            <p className="text-base text-gray-200 max-w-3xl">
              Welcome to the Africa Conference 2025 registration portal. The conference will hold on 5, at the Shehu Musa Yar'Adua Centre, Abuja, Nigeria. To ensure a remarkable experience for you, kindly complete the form below - this will only take 3 minutes.
            </p>

              <p className="text-base text-gray-200 mb-4">
                Please Note: Pre-registration is important for all attendees. We look forward to hosting you.
              </p>
              <Separator className="bg-gray-600 my-4" />
              <p className="text-base text-gray-200">
                <strong>Français:</strong> Bienvenue sur le portail d'inscription à la Conférence #FixPolitics Afrique 2025. La conférence se tiendra les jeudi 2 et vendredi 3 octobre 2025 au Centre Shehu Musa Yar'Adua, à Abuja, au Nigéria. Pour une expérience inoubliable, veuillez remplir le formulaire ci-dessous ; cela ne vous prendra que 3 minutes. Remarque : la préinscription est obligatoire pour tous les participants. Nous avons hâte de vous accueillir.
              </p>
            </div>

            
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto p-6 space-y-8 [&_input]:border-gray-600 [&_select]:border-gray-600 [&_textarea]:border-gray-600 [&_button[data-slot='select-trigger']]:border-gray-600 [&_input[type='checkbox']]:border-gray-600 [&_input[type='radio']]:border-gray-600">

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Stepper */}
        <Card>
          <CardHeader>
            <CardTitle>Step {currentStep} of {totalSteps}</CardTitle>
            <CardDescription>Complete each step to submit your registration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: totalSteps }).map((_, idx) => (
                <div key={idx} className={`h-2 rounded ${idx + 1 <= currentStep ? 'bg-primary' : 'bg-muted'}`} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Step Content */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>SECTION 1: PERSONAL INFORMATION</CardTitle>
            </CardHeader>
            <CardContent>
              <Step1Personal formData={formData} errors={errors} onChange={handleInputChange} />
            </CardContent>
          </Card>
        )}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>SECTION 2: CONFERENCE PARTICIPATION</CardTitle>
            </CardHeader>
            <CardContent>
              <Step2Participation formData={formData} errors={errors} onChange={handleInputChange} />
            </CardContent>
          </Card>
        )}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>SECTION 3: BACKGROUND & INTERESTS</CardTitle>
            </CardHeader>
            <CardContent>
              <Step3Background formData={formData} errors={errors} onChange={handleInputChange} onArrayChange={handleArrayChange} onFileUpload={handleFileUpload} />
            </CardContent>
          </Card>
        )}
        {currentStep === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>SECTION 4: INTENTIONS, ACCESS & ENGAGEMENT</CardTitle>
            </CardHeader>
            <CardContent>
              <Step4Intentions formData={formData} errors={errors} onChange={handleInputChange} onArrayChange={handleArrayChange} />
            </CardContent>
          </Card>
        )}
        {currentStep === 5 && (
          <Card>
            <CardHeader>
              <CardTitle>SECTION 5: CONSENT & PRIVACY</CardTitle>
            </CardHeader>
            <CardContent>
              <Step5Consent formData={formData} errors={errors} onChange={handleInputChange} />
            </CardContent>
          </Card>
        )}

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <Button type="button" variant="secondary" onClick={goBack} disabled={currentStep === 1 || isSubmitting || isUploadingPhoto}>
            Back
          </Button>
          {currentStep < totalSteps ? (
            <Button type="button" onClick={goNext} disabled={isSubmitting || isUploadingPhoto}>
              Next
            </Button>
          ) : null}
        </div>

        {/* Hide original long form sections */}
        <div className="hidden">
        {/* Section 1: Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>SECTION 1: PERSONAL INFORMATION / INFORMATIONS PERSONNELLES</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-lg">
                  First Name / Prénom *
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Your given name as you'd like it to appear on your badge"
                />
                {errors.firstName && <p className="text-base text-destructive">{errors.firstName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-lg">
                  Last Name / Nom *
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Your surname or family name"
                />
                {errors.lastName && <p className="text-base text-destructive">{errors.lastName}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-lg">Gender / Genre *</Label>
              <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male / Homme</SelectItem>
                  <SelectItem value="female">Female / Femme</SelectItem>
                  <SelectItem value="other">Other / Autre</SelectItem>
                  <SelectItem value="prefer-not-to-say">Prefer not to say / Préfère ne pas dire</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <p className="text-base text-destructive">{errors.gender}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">
                Phone Number / Numéro de téléphone *
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                placeholder="+234 812 000 0000 (Include your country code)"
              />
              <p className="text-sm text-muted-foreground">
                Include your country code. Example: +234 812 000 0000 / Indiquez votre indicatif pays. Exemple : +225 07 00 00 00 00
              </p>
              {errors.phoneNumber && <p className="text-base text-destructive">{errors.phoneNumber}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address / Adresse e-mail *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@example.com"
              />
              <p className="text-sm text-muted-foreground">
                We will send all confirmations and updates here. / Toutes les confirmations et informations seront envoyées à cette adresse.
              </p>
              {errors.email && <p className="text-base text-destructive">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="countryOfResidence">
                  Country of Residence / Pays de résidence *
                </Label>
                <Input
                  id="countryOfResidence"
                  value={formData.countryOfResidence}
                  onChange={(e) => handleInputChange('countryOfResidence', e.target.value)}
                  placeholder="Where do you currently live"
                />
                {errors.countryOfResidence && <p className="text-base text-destructive">{errors.countryOfResidence}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">
                  Location *
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Area or Town, example: Kumasi, Ghana"
                />
                {errors.location && <p className="text-base text-destructive">{errors.location}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ageRange">
                Age Range / Tranche d'âge *
              </Label>
              <Select value={formData.ageRange} onValueChange={(value) => handleInputChange('ageRange', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18-25">18-25</SelectItem>
                  <SelectItem value="26-35">26-35</SelectItem>
                  <SelectItem value="36-45">36-45</SelectItem>
                  <SelectItem value="46-55">46-55</SelectItem>
                  <SelectItem value="56-65">56-65</SelectItem>
                  <SelectItem value="65+">65+</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                This helps us understand our audience demographics for inclusion and planning.
              </p>
              {errors.ageRange && <p className="text-base text-destructive">{errors.ageRange}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Conference Participation */}
        <Card>
          <CardHeader>
            <CardTitle>SECTION 2: CONFERENCE PARTICIPATION / PARTICIPATION À LA CONFÉRENCE</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="text-lg">Are you joining us from outside Nigeria / Participez-vous depuis l'extérieur du Nigeria *</Label>
              <Select value={formData.joiningFromOutsideNigeria} onValueChange={(value) => handleInputChange('joiningFromOutsideNigeria', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes / Oui</SelectItem>
                  <SelectItem value="no">No / Non</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                This helps us plan logistics and engagement. / Cela nous aide à planifier la logistique et l'engagement.
              </p>
              {errors.joiningFromOutsideNigeria && <p className="text-base text-destructive">{errors.joiningFromOutsideNigeria}</p>}
            </div>

            <div className="space-y-2">
              <Label className="text-lg">How will you attend Day 1 / Comment participerez-vous à la Journée 1 *</Label>
              <p className="text-sm text-muted-foreground">(e.g Thursday, October 2, 2025) / Jeudi 2 octobre 2025</p>
              <Select value={formData.day1Attendance} onValueChange={(value) => handleInputChange('day1Attendance', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select attendance option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="virtually">Virtually / Virtuellement</SelectItem>
                  <SelectItem value="physically">Physically / Présentielle</SelectItem>
                  <SelectItem value="not-attending">Not attending</SelectItem>
                </SelectContent>
              </Select>
              {errors.day1Attendance && <p className="text-base text-destructive">{errors.day1Attendance}</p>}
            </div>

            <div className="space-y-2">
              <Label className="text-lg">How will you attend Day 2/VoiceofAfricabyAfricans Anniversary / Comment participerez-vous à la Journée 2 /VoiceofAfricabyAfricans anniversaire *</Label>
              <p className="text-sm text-muted-foreground">Friday, October 3, 2025 / Vendredi 3 octobre 2025</p>
              <Select value={formData.day2Attendance} onValueChange={(value) => handleInputChange('day2Attendance', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select attendance option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="virtually">Virtually / Virtuellement</SelectItem>
                  <SelectItem value="physically">Physically / Présentielle</SelectItem>
                  <SelectItem value="not-attending">Not at all</SelectItem>
                </SelectContent>
              </Select>
              {errors.day2Attendance && <p className="text-base text-destructive">{errors.day2Attendance}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Background & Interests */}
        <Card>
          <CardHeader>
            <CardTitle>SECTION 3: BACKGROUND & INTERESTS / PROFIL & INTÉRÊTS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="currentRole">
                  What is your current role / Fonction actuelle *
                </Label>
                <Input
                  id="currentRole"
                  value={formData.currentRole}
                  onChange={(e) => handleInputChange('currentRole', e.target.value)}
                  placeholder="Your current position or role"
                />
                <p className="text-sm text-muted-foreground">
                  This helps us tailor sessions and networking opportunities.
                </p>
                {errors.currentRole && <p className="text-base text-destructive">{errors.currentRole}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="seniorityLevel">
                  Seniority Level / Niveau de responsabilité *
                </Label>
                <Select value={formData.seniorityLevel} onValueChange={(value) => handleInputChange('seniorityLevel', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select seniority level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry-level">Entry Level / Débutant</SelectItem>
                    <SelectItem value="mid-level">Mid Level / Intermédiaire</SelectItem>
                    <SelectItem value="senior-level">Senior Level / Senior</SelectItem>
                    <SelectItem value="executive">Executive / Dirigeant</SelectItem>
                    <SelectItem value="founder-ceo">Founder/CEO / Fondateur/PDG</SelectItem>
                  </SelectContent>
                </Select>
                {errors.seniorityLevel && <p className="text-base text-destructive">{errors.seniorityLevel}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="organizationName">
                Name of Organisation / Nom de l'organisation *
              </Label>
              <Input
                id="organizationName"
                value={formData.organizationName}
                onChange={(e) => handleInputChange('organizationName', e.target.value)}
                placeholder="The organisation, institution or group you represent"
              />
              <p className="text-sm text-muted-foreground">
                The organisation, institution or group you represent (if any).
              </p>
              {errors.organizationName && <p className="text-base text-destructive">{errors.organizationName}</p>}
            </div>

            <div className="space-y-2">
              <Label>Sector / Domaine professionnel *</Label>
              <p className="text-sm text-muted-foreground">
                Select the areas most relevant to your work or interests. / Sélectionnez les secteurs les plus pertinents pour votre travail ou vos intérêts.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Governance', 'Media', 'Education', 'Health', 'Technology', 'Policy',
                  'Business', 'Civil Society', 'Faith-based', 'Other'
                ].map((sector) => (
                  <div key={sector} className="flex items-center space-x-2">
                    <Checkbox
                      id={`sector-${sector}`}
                      checked={formData.sector.includes(sector)}
                      onCheckedChange={(checked) => handleArrayChange('sector', sector, checked as boolean)}
                    />
                    <Label htmlFor={`sector-${sector}`} className="text-lg">{sector}</Label>
                  </div>
                ))}
              </div>
              {errors.sector && <p className="text-base text-destructive">{errors.sector}</p>}
            </div>

            <div className="space-y-2">
              <Label>Areas of Interest / Domaines d'intérêt *</Label>
              <p className="text-sm text-muted-foreground">
                Which areas are you most passionate about / Dans quels domaines êtes-vous le plus engagé(e)
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Governance', 'Elections', 'Youth Empowerment', 'Gender Equality', 'Economy', 'Education',
                  'Tech & Innovation', 'Climate', 'Health', 'Other'
                ].map((area) => (
                  <div key={area} className="flex items-center space-x-2">
                    <Checkbox
                      id={`interest-${area}`}
                      checked={formData.areasOfInterest.includes(area)}
                      onCheckedChange={(checked) => handleArrayChange('areasOfInterest', area, checked as boolean)}
                    />
                    <Label htmlFor={`interest-${area}`} className="text-lg">{area}</Label>
                  </div>
                ))}
              </div>
              {errors.areasOfInterest && <p className="text-base text-destructive">{errors.areasOfInterest}</p>}
            </div>

            <div className="space-y-2">
              <Label>Languages Spoken / Langues parlées *</Label>
              <p className="text-sm text-muted-foreground">
                This helps us plan interpretation and support. / Cela nous aide à planifier les services d'interprétation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['English', 'French', 'Arabic', 'Swahili', 'Other'].map((language) => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox
                      id={`language-${language}`}
                      checked={formData.languagesSpoken.includes(language)}
                      onCheckedChange={(checked) => handleArrayChange('languagesSpoken', language, checked as boolean)}
                    />
                    <Label htmlFor={`language-${language}`} className="text-lg">{language}</Label>
                  </div>
                ))}
              </div>
              {errors.languagesSpoken && <p className="text-base text-destructive">{errors.languagesSpoken}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="socialMediaHandle">
                Social Media Handle (LinkedIn, X/Twitter, etc.)
              </Label>
              <Input
                id="socialMediaHandle"
                value={formData.socialMediaHandle}
                onChange={(e) => handleInputChange('socialMediaHandle', e.target.value)}
                placeholder="@username or LinkedIn profile"
              />
              <p className="text-sm text-muted-foreground">
                For networking and engagement (optional). / Pour le réseautage (facultatif).
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="profilePhoto">
                Upload a profile photo (optional) / Téléversez une photo de profil (facultatif)
              </Label>
              <Input
                id="profilePhoto"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-base file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              <p className="text-sm text-muted-foreground">
                Used for badges and networking materials. / Pour les badges et les supports de réseautage.
              </p>
              <p className="text-sm text-muted-foreground">
                Supported formats: JPEG, PNG, GIF, WebP. Max size: 5MB.
              </p>
              {errors.profilePhoto && <p className="text-base text-destructive">{errors.profilePhoto}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Intentions, Access & Engagement */}
        <Card>
          <CardHeader>
            <CardTitle>SECTION 4: INTENTIONS, ACCESS & ENGAGEMENT / INTENTIONS, BESOINS & ENGAGEMENT FUTUR</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">
                  What Category do you belong / À quelle catégorie appartenez-vous *
                </Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional / Professionnel</SelectItem>
                    <SelectItem value="student">Student / Étudiant</SelectItem>
                    <SelectItem value="academic">Academic / Universitaire</SelectItem>
                    <SelectItem value="civil-society">Civil Society / Société civile</SelectItem>
                    <SelectItem value="government">Government / Gouvernement</SelectItem>
                    <SelectItem value="media">Media / Médias</SelectItem>
                    <SelectItem value="other">Other / Autre</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-base text-destructive">{errors.category}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="professionalBackground">
                  Professional Background / Expérience professionnelle *
                </Label>
                <Textarea
                  id="professionalBackground"
                  value={formData.professionalBackground}
                  onChange={(e) => handleInputChange('professionalBackground', e.target.value)}
                  placeholder="Brief description of your professional background"
                  rows={3}
                />
                {errors.professionalBackground && <p className="text-base text-destructive">{errors.professionalBackground}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Reasons for Attending / Raisons de participer *</Label>
              <p className="text-sm text-muted-foreground">
                Select all that apply. / Veuillez sélectionner toutes les réponses qui s'appliquent.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'To network with other leaders. / Pour réseauter avec d\'autres dirigeants.',
                  'To learn from the speakers. / Apprendre des intervenants.',
                  'To contribute to the discussion. / Pour contribuer à la discussion.',
                  'To find collaboration opportunities. / Pour trouver des opportunités de collaboration.',
                  'Plan to run for public office. / Je prévois de me présenter à une fonction publique.',
                  'I am a policymaker/public servant and want to improve my skills. / Je suis un décideur politique/fonctionnaire et je souhaite améliorer mes compétences.',
                  'To better understand the work of #VoiceofAfricabyAfricans. / Pour mieux comprendre le travail de #VoiceofAfricabyAfricans.',
                  'I\'m exploring partnership opportunities / J\'explore des opportunités de partenariat',
                  'Other (please specify)'
                ].map((reason) => (
                  <div key={reason} className="flex items-start space-x-2">
                    <Checkbox
                      id={`reason-${reason}`}
                      checked={formData.reasonsForAttending.includes(reason)}
                      onCheckedChange={(checked) => handleArrayChange('reasonsForAttending', reason, checked as boolean)}
                    />
                    <Label htmlFor={`reason-${reason}`} className="text-base leading-relaxed">{reason}</Label>
                  </div>
                ))}
              </div>
              {errors.reasonsForAttending && <p className="text-base text-destructive">{errors.reasonsForAttending}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="howDidYouHear">
                How did you hear about the conference / Comment avez-vous entendu parler de la conférence *
              </Label>
              <Select value={formData.howDidYouHear} onValueChange={(value) => handleInputChange('howDidYouHear', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select one option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="social-media">Social Media / Réseaux sociaux</SelectItem>
                  <SelectItem value="email">Email / Courriel</SelectItem>
                  <SelectItem value="website">Website / Site web</SelectItem>
                  <SelectItem value="referral">Referral / Parrainage</SelectItem>
                  <SelectItem value="newsletter">Newsletter / Bulletin</SelectItem>
                  <SelectItem value="partner-organization">Partner Organization / Organisation partenaire</SelectItem>
                  <SelectItem value="other">Other / Autre</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Select one option. / Sélectionnez une option.
              </p>
              {errors.howDidYouHear && <p className="text-base text-destructive">{errors.howDidYouHear}</p>}
            </div>


            <div className="space-y-2">
              <Label htmlFor="accessibilityNeeds">
                Accessibility, Dietary or Special Needs / Besoins spécifiques (accessibilité, alimentation, etc.)
              </Label>
              <Textarea
                id="accessibilityNeeds"
                value={formData.accessibilityNeeds}
                onChange={(e) => handleInputChange('accessibilityNeeds', e.target.value)}
                placeholder="Do you have any accessibility, dietary, or health-related needs we should be aware of"
                rows={3}
              />
              <p className="text-sm text-muted-foreground">
                Do you have any accessibility, dietary, or health-related needs we should be aware of / Avez-vous des besoins spécifiques à prendre en compte
              </p>
            </div>

            <div className="space-y-2">
              <Label>Future Engagement with #VoiceofAfricabyAfricans / Engagement futur avec #VoiceofAfricabyAfricans</Label>
              <p className="text-sm text-muted-foreground">
                How would you like to stay involved after the conference / Comment souhaitez-vous rester impliqué(e) après la conférence
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Join mailing list', 'Volunteer', 'Attend trainings', 'Partner/sponsor', 'Not interested'
                ].map((engagement) => (
                  <div key={engagement} className="flex items-center space-x-2">
                    <Checkbox
                      id={`engagement-${engagement}`}
                      checked={formData.futureEngagement.includes(engagement)}
                      onCheckedChange={(checked) => handleArrayChange('futureEngagement', engagement, checked as boolean)}
                    />
                    <Label htmlFor={`engagement-${engagement}`} className="text-lg">{engagement}</Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Consent & Privacy */}
        <Card>
          <CardHeader>
            <CardTitle>SECTION 5: CONSENT & PRIVACY / CONSENTEMENT ET CONFIDENTIALITÉ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 p-4 bg-muted rounded-lg">
              <p className="text-lg">
                By registering for the Africa Conference 2025, you consent to the collection and use of your information for event planning, impact reporting, and future updates (if opted in). Your data will be stored securely, accessed only by authorised #TheVoiceofAfricabyAfricans staff, and never shared or sold to third parties.
              </p>
              <Separator />
              <p className="text-lg">
                En vous inscrivant à la Conférence Afrique 2025 de #FixPolitics, vous consentez à la collecte et à l'utilisation de vos informations pour l'organisation de l'événement, les rapports d'impact, et les communications futures (si vous y avez consenti). Vos données seront stockées en toute sécurité, accessibles uniquement par le personnel autorisé de #L'équipe de Voice of Africa by Africans, et ne seront jamais partagées ni vendues à des tiers.
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
              />
              <Label htmlFor="consent" className="text-base leading-relaxed">
                I agree to the terms and conditions above / J'accepte les termes et conditions ci-dessus *
              </Label>
            </div>
            {errors.consent && <p className="text-base text-destructive">{errors.consent}</p>}
          </CardContent>
        </Card>
        </div>

        {/* Submit Button */}
        <div className="text-center space-y-4">
          <Button 
            type="submit" 
            size="lg" 
            className="w-full md:w-auto px-8"
            disabled={isSubmitting || isUploadingPhoto}
          >
            {isUploadingPhoto 
              ? 'UPLOADING PHOTO... / TÉLÉCHARGEMENT...' 
              : isSubmitting 
                ? 'SUBMITTING... / ENVOI EN COURS...' 
                : 'SUBMIT / SOUMETTRE'
            }
          </Button>
          
          {/* Upload Progress */}
          {uploadProgress && (
            <div className="p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg">
              <p className="text-sm font-medium">{uploadProgress}</p>
            </div>
          )}
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <p className="font-semibold">✅ Registration Submitted!</p>
              <p>Your registration has been submitted.</p>
              <p className="text-sm mt-2">
                <strong>Français:</strong> Votre inscription a été soumise.
              </p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-semibold">❌ Submission Failed</p>
              <p>There was an error submitting your registration. Please try again or contact support if the problem persists.</p>
              <p className="text-sm mt-2">
                <strong>Français:</strong> Une erreur s'est produite lors de l'envoi de votre inscription. Veuillez réessayer ou contacter le support si le problème persiste.
              </p>
            </div>
          )}
          
          <p className="text-sm text-muted-foreground">
            Do not submit passwords through this form. Report malicious form
          </p>
        </div>
      </form>
      </div>
    </div>
  )
}
