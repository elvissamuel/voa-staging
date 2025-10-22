"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Props {
  formData: any
  errors: Record<string, string>
  onChange: (field: any, value: any) => void
}

export default function Step1Personal({ formData, errors, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-base">First Name / Prénom *</Label>
          <Input id="firstName" value={formData.firstName} onChange={(e) => onChange('firstName', e.target.value)} placeholder="Your given name as you'd like it to appear on your badge" />
          {errors.firstName && <p className="text-base text-destructive">{errors.firstName}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-base">Last Name / Nom *</Label>
          <Input id="lastName" value={formData.lastName} onChange={(e) => onChange('lastName', e.target.value)} placeholder="Your surname or family name" />
          {errors.lastName && <p className="text-base text-destructive">{errors.lastName}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-base">Gender / Genre *</Label>
        <Select value={formData.gender} onValueChange={(value) => onChange('gender', value)}>
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
        <Label htmlFor="phoneNumber">Phone Number / Numéro de téléphone *</Label>
        <Input id="phoneNumber" type="tel" value={formData.phoneNumber} onChange={(e) => onChange('phoneNumber', e.target.value)} placeholder="+234 812 000 0000 (Include your country code)" />
        {errors.phoneNumber && <p className="text-base text-destructive">{errors.phoneNumber}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address / Adresse e-mail *</Label>
        <Input id="email" type="email" value={formData.email} onChange={(e) => onChange('email', e.target.value)} placeholder="your.email@example.com" />
        {errors.email && <p className="text-base text-destructive">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="countryOfResidence">Country of Residence / Pays de résidence *</Label>
          <Input id="countryOfResidence" value={formData.countryOfResidence} onChange={(e) => onChange('countryOfResidence', e.target.value)} placeholder="Where do you currently live" />
          {errors.countryOfResidence && <p className="text-base text-destructive">{errors.countryOfResidence}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location *</Label>
          <Input id="location" value={formData.location} onChange={(e) => onChange('location', e.target.value)} placeholder="Area or Town, example: Kumasi, Ghana" />
          {errors.location && <p className="text-base text-destructive">{errors.location}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="ageRange">Age Range / Tranche d'âge *</Label>
        <Select value={formData.ageRange} onValueChange={(value) => onChange('ageRange', value)}>
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
        {errors.ageRange && <p className="text-base text-destructive">{errors.ageRange}</p>}
      </div>
    </div>
  )
}


