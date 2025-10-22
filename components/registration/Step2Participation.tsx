"use client"

import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Props {
  formData: any
  errors: Record<string, string>
  onChange: (field: any, value: any) => void
}

export default function Step2Participation({ formData, errors, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-base">Are you joining us from outside Nigeria / Participez-vous depuis l'extérieur du Nigeria *</Label>
        <Select value={formData.joiningFromOutsideNigeria} onValueChange={(value) => onChange('joiningFromOutsideNigeria', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes / Oui</SelectItem>
            <SelectItem value="no">No / Non</SelectItem>
          </SelectContent>
        </Select>
        {errors.joiningFromOutsideNigeria && <p className="text-base text-destructive">{errors.joiningFromOutsideNigeria}</p>}
      </div>

      <div className="space-y-2">
        <Label className="text-base">How will you attend Day 1 / Comment participerez-vous à la Journée 1 *</Label>
        <Select value={formData.day1Attendance} onValueChange={(value) => onChange('day1Attendance', value)}>
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
        <Label className="text-base">How will you attend Day 2 / Comment participerez-vous à la Journée 2 *</Label>
        <Select value={formData.day2Attendance} onValueChange={(value) => onChange('day2Attendance', value)}>
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
    </div>
  )
}


