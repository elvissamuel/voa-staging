import type * as React from "react"

export const getConferenceRegistrationEmailTemplate = (user: any, registrationCode: string): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
        <tr>
          <td style="text-align: center; padding: 20px 0;">
            <img
              src="/narrative.png"
              alt="Africa Conference 2025"
              width="400"
              height="auto"
              style="display: block; margin: 0 auto; border-radius: 10px; border: none; max-width: 100%; height: auto; object-fit: contain;"
            />
          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-radius: 6px; padding: 30px; margin-bottom: 20px;">
        <tr>
          <td>
            <h1 style="color: #2c3e50; font-size: 20px; font-weight: bold; margin-top: 0; margin-bottom: 20px;">
              Dear ${user.firstName} ${user.lastName},
            </h1>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              This is to confirm your registration for The Africa Conference 2025, taking place November 29th, 2025, Abuja, Nigeria.
            </p>

            <div style="background-color: #E0B500; color: #000; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
              <p style="margin: 0; font-size: 18px; font-weight: bold;">
                Your Registration Code is: ${registrationCode}
              </p>
            </div>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Please present this confirmation at the venue for access to the event.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
              Warm regards,<br/>
              The Africa Conference 2025 Operations Team
            </p>
          </td>
        </tr>
      </table>

      <!-- French Section -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-radius: 6px; padding: 30px; margin-bottom: 20px; border-top: 3px solid #E0B500;">
        <tr>
          <td>
            <h1 style="color: #2c3e50; font-size: 20px; font-weight: bold; margin-top: 0; margin-bottom: 20px;">
              Cher/Chère ${user.firstName} ${user.lastName},
            </h1>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Nous avons le plaisir de confirmer votre inscription à The Africa Conference 2025, qui se tiendra le 29 novembre 2025 à Abuja, Nigeria.
            </p>

            <div style="background-color: #E0B500; color: #000; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
              <p style="margin: 0; font-size: 18px; font-weight: bold;">
                Votre code d'inscription est : ${registrationCode}
              </p>
            </div>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Veuillez présenter cette confirmation à l'entrée afin d'accéder à l'événement.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
              Cordialement,<br/>
              Équipe des Opérations – Conférence Afrique 2025
            </p>
          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="text-align: center; padding: 20px 0; border-top: 1px solid #e0e0e0;">
            <p style="color: #999999; font-size: 14px; margin: 0 0 10px 0;">
              © ${new Date().getFullYear()} The Africa Conference 2025. All rights reserved.
            </p>
            <p style="color: #999999; font-size: 14px; margin: 0;">
              If you have any questions, please contact us at
              <a href="mailto:info@africaconference2025.com" style="color: #E0B500;">
                info@africaconference2025.com
              </a>
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
};