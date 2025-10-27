"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Props {
  formData: any
  errors: Record<string, string>
  onChange: (field: any, value: any) => void
  onArrayChange: (field: any, value: string, checked: boolean) => void
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const sectors = ['Governance', 'Media', 'Education', 'Health', 'Technology', 'Policy','Business', 'Civil Society', 'Faith-based', 'Other']
const interests = ['Governance', 'Elections', 'Youth Empowerment', 'Gender Equality', 'Economy', 'Education','Tech & Innovation', 'Climate', 'Health', 'Other']
const languages = ['English', 'French', 'Arabic', 'Swahili', 'Other']

export default function Step3Background({ formData, errors, onChange, onArrayChange, onFileUpload }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="currentRole">What is your current role / Fonction actuelle *</Label>
          <Input id="currentRole" value={formData.currentRole} onChange={(e) => onChange('currentRole', e.target.value)} placeholder="Your current position or role" />
          {errors.currentRole && <p className="text-base text-destructive">{errors.currentRole}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="seniorityLevel">Seniority Level / Niveau de responsabilité *</Label>
          <Select value={formData.seniorityLevel} onValueChange={(value) => onChange('seniorityLevel', value)}>
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
        <Label htmlFor="organizationName">Name of Organisation / Nom de l'organisation *</Label>
        <Input id="organizationName" value={formData.organizationName} onChange={(e) => onChange('organizationName', e.target.value)} placeholder="The organisation, institution or group you represent" />
        {errors.organizationName && <p className="text-base text-destructive">{errors.organizationName}</p>}
      </div>

      <div className="space-y-2">
        <Label>Sector / Domaine professionnel *</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {sectors.map((sector) => (
            <div key={sector} className="flex items-center space-x-2">
              <Checkbox id={`sector-${sector}`} checked={formData.sector.includes(sector)} onCheckedChange={(checked) => onArrayChange('sector', sector, checked as boolean)} />
              <Label htmlFor={`sector-${sector}`} className="text-base">{sector}</Label>
            </div>
          ))}
        </div>
        {errors.sector && <p className="text-base text-destructive">{errors.sector}</p>}
      </div>

      <div className="space-y-2">
        <Label>Areas of Interest / Domaines d'intérêt *</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {interests.map((area) => (
            <div key={area} className="flex items-center space-x-2">
              <Checkbox id={`interest-${area}`} checked={formData.areasOfInterest.includes(area)} onCheckedChange={(checked) => onArrayChange('areasOfInterest', area, checked as boolean)} />
              <Label htmlFor={`interest-${area}`} className="text-base">{area}</Label>
            </div>
          ))}
        </div>
        {errors.areasOfInterest && <p className="text-base text-destructive">{errors.areasOfInterest}</p>}
      </div>

      <div className="space-y-2">
        <Label>Languages Spoken / Langues parlées *</Label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {languages.map((language) => (
            <div key={language} className="flex items-center space-x-2">
              <Checkbox id={`language-${language}`} checked={formData.languagesSpoken.includes(language)} onCheckedChange={(checked) => onArrayChange('languagesSpoken', language, checked as boolean)} />
              <Label htmlFor={`language-${language}`} className="text-base">{language}</Label>
            </div>
          ))}
        </div>
        {errors.languagesSpoken && <p className="text-base text-destructive">{errors.languagesSpoken}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="socialMediaHandle">Social Media Handle (LinkedIn, X/Twitter, etc.)</Label>
        <Input id="socialMediaHandle" value={formData.socialMediaHandle} onChange={(e) => onChange('socialMediaHandle', e.target.value)} placeholder="@username or LinkedIn profile" />
      </div>

      {/* Profile Photo (optional) */}
      <div className="space-y-2">
        <Label htmlFor="profilePhoto">Upload a profile photo (optional)</Label>
        <Input
          id="profilePhoto"
          type="file"
          accept="image/*"
          onChange={onFileUpload}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-base file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
        />
        <p className="text-sm text-muted-foreground">Supported: JPEG, PNG, GIF, WebP. Max size: 5MB.</p>
        {errors.profilePhoto && <p className="text-base text-destructive">{errors.profilePhoto}</p>}
      </div>
    </div>
  )
}


