"use client"

import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Props {
  formData: any
  errors: Record<string, string>
  onChange: (field: any, value: any) => void
  onArrayChange: (field: any, value: string, checked: boolean) => void
}

const reasons = [
  "To network with other leaders. / Pour réseauter avec d'autres dirigeants.",
  'To learn from the speakers. / Apprendre des intervenants.',
  'To contribute to the discussion. / Pour contribuer à la discussion.',
  'To find collaboration opportunities. / Pour trouver des opportunités de collaboration.',
  'Plan to run for public office. / Je prévois de me présenter à une fonction publique.',
  "I am a policymaker/public servant and want to improve my skills. / Je suis un décideur politique/fonctionnaire et je souhaite améliorer mes compétences.",
  "To better understand the work of #VoiceofAfricabyAfricans. / Pour mieux comprendre le travail de #VoiceofAfricabyAfricans.",
  "I'm exploring partnership opportunities / J'explore des opportunités de partenariat",
  'Other (please specify)'
]

const engagements = ['Join mailing list', 'Volunteer', 'Attend trainings', 'Partner/sponsor', 'Not interested']

export default function Step4Intentions({ formData, errors, onChange, onArrayChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-sm">What Category do you belong / À quelle catégorie appartenez-vous *</Label>
          <Select value={formData.category} onValueChange={(value) => onChange('category', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className='text-sm'>
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
          <Label className='text-sm' htmlFor="professionalBackground">Professional Background / Expérience professionnelle *</Label>
          <Textarea id="professionalBackground" value={formData.professionalBackground} onChange={(e) => onChange('professionalBackground', e.target.value)} rows={3} />
          {errors.professionalBackground && <p className="text-base text-destructive">{errors.professionalBackground}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Reasons for Attending / Raisons de participer *</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-start space-x-2">
              <Checkbox id={`reason-${reason}`} checked={formData.reasonsForAttending.includes(reason)} onCheckedChange={(checked) => onArrayChange('reasonsForAttending', reason, checked as boolean)} />
              <Label htmlFor={`reason-${reason}`} className="text-sm leading-relaxed">{reason}</Label>
            </div>
          ))}
        </div>
        {errors.reasonsForAttending && <p className="text-base text-destructive">{errors.reasonsForAttending}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="howDidYouHear">How did you hear about the conference *</Label>
        <Select value={formData.howDidYouHear} onValueChange={(value) => onChange('howDidYouHear', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select one option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="social-media">Social Media</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="website">Website</SelectItem>
            <SelectItem value="referral">Referral</SelectItem>
            <SelectItem value="newsletter">Newsletter</SelectItem>
            <SelectItem value="partner-organization">Partner Organization</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.howDidYouHear && <p className="text-base text-destructive">{errors.howDidYouHear}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="accessibilityNeeds">Accessibility, Dietary or Special Needs</Label>
        <Textarea id="accessibilityNeeds" value={formData.accessibilityNeeds} onChange={(e) => onChange('accessibilityNeeds', e.target.value)} rows={3} />
      </div>

      <div className="space-y-2">
        <Label>Future Engagement with #VoiceofAfricabyAfricans</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {engagements.map((engagement) => (
            <div key={engagement} className="flex items-center space-x-2">
              <Checkbox id={`engagement-${engagement}`} checked={formData.futureEngagement.includes(engagement)} onCheckedChange={(checked) => onArrayChange('futureEngagement', engagement, checked as boolean)} />
              <Label htmlFor={`engagement-${engagement}`} className="text-sm">{engagement}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


