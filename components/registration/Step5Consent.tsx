"use client"

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

interface Props {
  formData: any
  errors: Record<string, string>
  onChange: (field: any, value: any) => void
}

export default function Step5Consent({ formData, errors, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-4 p-4 bg-muted rounded-lg">
        <p className="text-lg">
          By registering for the Africa Conference 2025, you consent to the collection and use of your information for event planning, impact reporting, and future updates (if opted in). Your data will be stored securely, accessed only by authorised staff, and never shared or sold to third parties.
        </p>
        <Separator />
        <p className="text-lg">
          En vous inscrivant, vous consentez à la collecte et à l'utilisation de vos informations pour l'organisation de l'événement, les rapports d'impact, et les communications futures (si vous y avez consenti). Vos données seront stockées en toute sécurité.
        </p>
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox id="consent" checked={formData.consent} onCheckedChange={(checked) => onChange('consent', checked as boolean)} />
        <Label htmlFor="consent" className="text-base leading-relaxed">
          I agree to the terms and conditions above / J'accepte les termes et conditions ci-dessus *
        </Label>
      </div>
      {errors.consent && <p className="text-base text-destructive">{errors.consent}</p>}
    </div>
  )
}


