import { z } from 'zod'

export const conferenceRegistrationSchema = z.object({
  // Section 1: Personal Information
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  gender: z.string().min(1, 'Gender is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  countryOfResidence: z.string().min(1, 'Country of residence is required'),
  location: z.string().min(1, 'Location is required'),
  ageRange: z.string().min(1, 'Age range is required'),

  // Section 2: Conference Participation
  joiningFromOutsideNigeria: z.string().min(1, 'Please specify if joining from outside Nigeria'),
  day1Attendance: z.string().min(1, 'Please specify Day 1 attendance'),
  day2Attendance: z.string().min(1, 'Please specify Day 2 attendance'),

  // Section 3: Background & Interests
  currentRole: z.string().min(1, 'Current role is required'),
  seniorityLevel: z.string().min(1, 'Seniority level is required'),
  organizationName: z.string().min(1, 'Organization name is required'),
  sector: z.string().min(1, 'Please select at least one sector'),
  areasOfInterest: z.string().min(1, 'Please select at least one area of interest'),
  languagesSpoken: z.string().min(1, 'Please select at least one language'),
  socialMediaHandle: z.string().optional(),

  // Section 4: Intentions, Access & Engagement
  category: z.string().min(1, 'Category is required'),
  professionalBackground: z.string().min(1, 'Professional background is required'),
  reasonsForAttending: z.string().min(1, 'Please select at least one reason for attending'),
  howDidYouHear: z.string().min(1, 'Please specify how you heard about the conference'),
  accessibilityNeeds: z.string().optional(),
  futureEngagement: z.string().min(1, 'Please select at least one future engagement option'),

  // Section 5: Consent
  consent: z.boolean().refine(val => val === true, 'You must agree to the terms and conditions'),

  // Profile Photo Information
  profilePhotoUrl: z.string().optional(),
  profilePhotoPublicId: z.string().optional(),
  profilePhotoName: z.string().optional(),

  // Submission timestamp
  submittedAt: z.string().min(1, 'Submission timestamp is required'),
})

export type ConferenceRegistrationData = z.infer<typeof conferenceRegistrationSchema>
