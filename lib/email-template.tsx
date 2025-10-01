import type * as React from "react"
import { ParticipantProps, PartnerProps, FellowshipProps } from "./models";

interface EmailTemplateProps {
  user: ParticipantProps
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ user }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      border: "1px solid #e0e0e0",
    }}
  >
    {/* Header with Logo */}
    <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "20px" }}>
      <tr>
        <td style={{ textAlign: "center", padding: "20px 0" }}>
             <img
            src="https://res.cloudinary.com/dws9ykgky/image/upload/v1745879732/MK-black_akqsy0.png"
            alt="Flame Logo"
            width="150"
            height="auto"
            style={{
              display: "block",
              margin: "0 auto",
              borderRadius: "10px",
              border: "none",
              maxWidth: "150px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </td>
      </tr>
    </table>

    {/* Organization Name */}
    <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "20px" }}>
      <tr>
        <td style={{ textAlign: "center" }}>
          <h2
            style={{
              color: "#D72638",
              margin: "0",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            FLAME Academy
          </h2>
        </td>
      </tr>
    </table>

    {/* Main Content */}
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{
        backgroundColor: "#fef2f2",
        borderRadius: "6px",
        padding: "30px",
        marginBottom: "20px",
      }}
    >
      <tr>
        <td>
          <h1
            style={{
              color: "#D72638",
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "0",
              marginBottom: "20px",
            }}
          >
            Welcome, {user.firstName} {user.lastName}!
          </h1>

          <p
            style={{
              color: "#555555",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0 0 20px 0",
            }}
          >
            Thank you for joining the FLAME mentorship program. We are excited to have you on board and
            look forward to supporting your journey of growth and development.
          </p>

          <p
            style={{
              color: "#555555",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0 0 20px 0",
            }}
          >
            Our mission is to equip and empower you with the insights, tools and resources needed to make you a better person and leader
          </p>

          <div
            style={{
              backgroundColor: "#D72638",
              color: "#ffffff",
              padding: "15px 25px",
              borderRadius: "4px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "16px",
              margin: "30px 0",
              display: "inline-block",
            }}
          >
            Get Started Now
          </div>
        </td>
      </tr>
    </table>

    {/* Footer */}
    <table width="100%" cellPadding="0" cellSpacing="0">
      <tr>
        <td style={{ textAlign: "center", padding: "20px 0" }}>
          <p
            style={{
              color: "#999999",
              fontSize: "14px",
              margin: "0 0 10px 0",
            }}
          >
            © {new Date().getFullYear()} FLAME Academy. All rights reserved.
          </p>
          <p
            style={{
              color: "#999999",
              fontSize: "14px",
              margin: "0",
            }}
          >
            If you have any questions, please contact us at{" "}
            <a href="mailto:admin@flame.org" style={{ color: "#D72638" }}>
              admin@flameacademy.org
            </a>
          </p>
        </td>
      </tr>
    </table>
  </div>
)

export const SuccessPaymentEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ user }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      border: "1px solid #e0e0e0",
    }}
  >
    {/* Header with Logo */}
    <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "20px" }}>
      <tr>
        <td style={{ textAlign: "center", padding: "20px 0" }}>
             <img
            src="https://res.cloudinary.com/dws9ykgky/image/upload/v1745879732/MK-black_akqsy0.png"
            alt="FLAME Academy Logo"
            width="150"
            height="auto"
            style={{
              display: "block",
              margin: "0 auto",
              borderRadius: "10px",
              border: "none",
              maxWidth: "150px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </td>
      </tr>
    </table>

    {/* Organization Name */}
    <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "20px" }}>
      <tr>
        <td style={{ textAlign: "center" }}>
          <h2
            style={{
              color: "#D72638",
              margin: "0",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            FLAME Academy
          </h2>
        </td>
      </tr>
    </table>

    {/* Main Content */}
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{
        backgroundColor: "#fef2f2",
        borderRadius: "6px",
        padding: "30px",
        marginBottom: "20px",
      }}
    >
      <tr>
        <td>
          <h1
            style={{
              color: "#D72638",
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "0",
              marginBottom: "20px",
            }}
          >
            Payment Successful, {user.firstName} {user.lastName}!
          </h1>

          <p
            style={{
              color: "#555555",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0 0 20px 0",
            }}
          >
            Thank you for your payment! Your registration for the FLAME mentorship program has been confirmed.
            We are excited to have you join us on this transformative journey.
          </p>

          <p
            style={{
              color: "#555555",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0 0 20px 0",
            }}
          >
            You will receive further instructions and access details shortly. Get ready to embark on a journey of growth, learning, and leadership development.
          </p>

          <div
            style={{
              backgroundColor: "#D72638",
              color: "#ffffff",
              padding: "15px 25px",
              borderRadius: "4px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "16px",
              margin: "30px 0",
              display: "inline-block",
            }}
          >
            Welcome to FLAME Academy!
          </div>
        </td>
      </tr>
    </table>

    {/* Footer */}
    <table width="100%" cellPadding="0" cellSpacing="0">
      <tr>
        <td style={{ textAlign: "center", padding: "20px 0" }}>
          <p
            style={{
              color: "#999999",
              fontSize: "14px",
              margin: "0 0 10px 0",
            }}
          >
            © {new Date().getFullYear()} FLAME Academy. All rights reserved.
          </p>
          <p
            style={{
              color: "#999999",
              fontSize: "14px",
              margin: "0",
            }}
          >
            If you have any questions, please contact us at{" "}
            <a href="mailto:admin@flame.org" style={{ color: "#D72638" }}>
              admin@flameacademy.org
            </a>
          </p>
        </td>
      </tr>
    </table>
  </div>
)

export const getPartPaymentConfirmationEmailTemplate = (user: ParticipantProps): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
        <tr>
          <td style="text-align: center; padding: 0 0;">
            <img
              src="https://res.cloudinary.com/dws9ykgky/image/upload/v1750228282/Flame_logo_print_yuqlma.png"
              alt="Flame Logo"
              width="150"
              height="auto"
              style="display: block; margin: 0 auto; border-radius: 10px; border: none; max-width: 150px; height: auto; object-fit: contain;"
            />
          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef2f2; border-radius: 6px; padding: 30px; margin-bottom: 20px;">
        <tr>
          <td>
            <h1 style="color: #D72638; font-size: 18px; font-weight: bold; margin-top: 0; margin-bottom: 20px;">
             Dear, ${user.firstName},
            </h1>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Thank you for your willingness to partner with us at Femi Lazarus Ministries. We are deeply grateful for your heart of love and commitment to advancing the work God has entrusted to us.

            </p>

             <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Here's a quick summary of what you shared with us:
             </p>
             <ul style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; padding-left: 20px;">
                <li>Name: ${user.firstName}</li>
                <li>Location: ${user.lastName}</li>
                <li>Monthly Commitment: [Amount]</li>
                <li>Newsletter Subscription: [Yes/No]</li>
             </ul>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              We are delighted to have you onboard as a Partner.  We will keep you updated through our newsletters so you can see the impact your partnership is making in lives.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              As a next step, please check your email regularly for updates about the ministry, testimonies, and monthly declarations we'll be sending your way.
            </p>

             <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Once again, we say a big thank you for staying unrelentedly committed to what God is doing at Femi Lazarus Ministries. Together, we are advancing the gospel, changing lives and advancing the Kingdom.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              If you have any questions or need assistance, please feel free to contact us at 08104551287 or 09030959735.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
              With love and gratitude,<br/>
              Femi Lazarus Ministries
            </p>

          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="text-align: center; padding: 20px 0;">
            <p style="color: #999999; font-size: 14px; margin: 0 0 10px 0;">
              © ${new Date().getFullYear()} Femi Lazarus Ministries. All rights reserved.
            </p>
            <p style="color: #999999; font-size: 14px; margin: 0;">
              If you have any questions, please contact us at
              <a href="mailto:admin@femilazarus.com" style="color: #D72638;">
                admin@femilazarus.com
              </a>
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
};

export const getIMCResponseEmailTemplate = (user: ParticipantProps): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
        <tr>
          <td style="text-align: center; padding: 0 0;">
            <img
              src="https://res.cloudinary.com/dws9ykgky/image/upload/v1750228282/Flame_logo_print_yuqlma.png"
              alt="Flame Logo"
              width="150"
              height="auto"
              style="display: block; margin: 0 auto; border-radius: 10px; border: none; max-width: 150px; height: auto; object-fit: contain;"
            />
          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef2f2; border-radius: 6px; padding: 30px; margin-bottom: 20px;">
        <tr>
          <td>
            <h1 style="color: #D72638; font-size: 18px; font-weight: bold; margin-top: 0; margin-bottom: 20px;">
             Hi ${user.firstName} ${user.lastName},
            </h1>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Thank you for registering for International Ministers Conference.

            </p>

             <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
            We are excitedly looking forward to receiving you for this life changing meeting

            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              <strong>Event Details:</strong>
            </p>
            <ul style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;"><strong>Theme:</strong> The Prevailing Church</li>
              <li style="margin-bottom: 8px;"><strong>Date:</strong> 18th - 21st of September, 2025</li>
              <li style="margin-bottom: 8px;"><strong>Venue:</strong> Light Place Event Center, Besides Nigerian Institute of Transport Technology, Off Asuquo Okon Street, UTAKO, FCT, Nigeria.</li>
            </ul>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
             This is a meeting to prayerfully attend, kindly plan and prepare for it. 
            </p>

             <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              For further correspondence, kindly keep up with any of our media pages for updates about the schedule of the conference.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              God bless you.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 20px 0; text-align: center;">
              To get customized DP for the conference, <a href="https://bit.ly/LNIMC25" style="color: #D72638; text-decoration: underline; font-weight: bold;">click here</a>
            </p>

          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="text-align: center; padding: 20px 0;">
            <p style="color: #999999; font-size: 14px; margin: 0 0 10px 0;">
              © ${new Date().getFullYear()} Femi Lazarus Ministries. All rights reserved.
            </p>
            <p style="color: #999999; font-size: 14px; margin: 0;">
              If you have any questions, please contact us at
              <a href="mailto:admin@femilazarus.com" style="color: #D72638;">
                admin@femilazarus.com
              </a>
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
};

export const getPartnershipEmailTemplate = (user: PartnerProps): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
        <tr>
          <td style="text-align: center; padding: 0 0;">
            <img
              src="https://res.cloudinary.com/dws9ykgky/image/upload/v1750228282/Flame_logo_print_yuqlma.png"
              alt="Flame Logo"
              width="150"
              height="auto"
              style="display: block; margin: 0 auto; border-radius: 10px; border: none; max-width: 150px; height: auto; object-fit: contain;"
            />
          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef2f2; border-radius: 6px; padding: 30px; margin-bottom: 20px;">
        <tr>
          <td>
            <h1 style="color: #D72638; font-size: 18px; font-weight: bold; margin-top: 0; margin-bottom: 20px;">
             Dear ${user.firstname} ${user.lastname},
            </h1>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Thank you for your willingness to partner with us at Femi Lazarus Ministries. We are deeply grateful for your heart of love and commitment to advancing the work God has entrusted to us.

            </p>

             <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Here's a quick summary of what you shared with us:
             </p>
             <ul style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; padding-left: 20px;">
                <li>Name: ${user.firstname} ${user.lastname}</li>
                <li>Location: ${user.city}, ${user.country}</li>
                <li>Monthly Commitment: ${user.amount}</li>
                <li>Newsletter Subscription: ${user.newsletter ? "Yes" : "No"}</li>
             </ul>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              We are delighted to have you onboard as a Partner.  We will keep you updated through our newsletters so you can see the impact your partnership is making in lives.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              As a next step, please check your email regularly for updates about the ministry, testimonies, and monthly declarations we'll be sending your way.
            </p>

             <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Once again, we say a big thank you for staying unrelentedly committed to what God is doing at Femi Lazarus Ministries. Together, we are advancing the gospel, changing lives and advancing the Kingdom.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
              With love and gratitude,<br/>
              Femi Lazarus Ministries
            </p>

          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="text-align: center; padding: 20px 0;">
            <p style="color: #999999; font-size: 14px; margin: 0 0 10px 0;">
              © ${new Date().getFullYear()} Femi Lazarus Ministries. All rights reserved.
            </p>
            <p style="color: #999999; font-size: 14px; margin: 0;">
              If you have any questions, please contact us at
              <a href="mailto:admin@femilazarus.com" style="color: #D72638;">
                admin@femilazarus.com
              </a>
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
};

export const getFellowshipRegistrationEmailTemplate = (user: FellowshipProps): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
        <tr>
          <td style="text-align: center; padding: 0 0;">
            <img
              src="https://res.cloudinary.com/dws9ykgky/image/upload/v1750228282/Flame_logo_print_yuqlma.png"
              alt="Flame Logo"
              width="150"
              height="auto"
              style="display: block; margin: 0 auto; border-radius: 10px; border: none; max-width: 150px; height: auto; object-fit: contain;"
            />
          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef2f2; border-radius: 6px; padding: 30px; margin-bottom: 20px;">
        <tr>
          <td>
            <h1 style="color: #D72638; font-size: 18px; font-weight: bold; margin-top: 0; margin-bottom: 20px;">
             Hi ${user.firstName},
            </h1>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Thank you for registering for the International Ministers Conference.
            </p>

             <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
            We are excitedly looking forward to receiving you for this life changing meeting
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              <strong>Event Details:</strong>
            </p>
            <ul style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;"><strong>Theme:</strong> The Prevailing Church</li>
              <li style="margin-bottom: 8px;"><strong>Date:</strong> 18th - 21st of September, 2025</li>
              <li style="margin-bottom: 8px;"><strong>Venue:</strong> Light Place Event Center, Besides Nigerian Institute of Transport Technology, Off Asuquo Okon Street, UTAKO, FCT, Nigeria.</li>
              <li style="margin-bottom: 8px;"><strong>Community:</strong> ${user.community}</li>
            </ul>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
             This is a meeting to prayerfully attend, kindly plan and prepare for it. 
            </p>

             <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              For further correspondence, kindly keep up with any of our media pages for updates about the schedule of the conference.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              God bless you.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 20px 0; text-align: center;">
              To get customized DP for the conference, <a href="https://bit.ly/LNIMC25" style="color: #D72638; text-decoration: underline; font-weight: bold;">click here</a>
            </p>

          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="text-align: center; padding: 20px 0;">
            <p style="color: #999999; font-size: 14px; margin: 0 0 10px 0;">
              © ${new Date().getFullYear()} Femi Lazarus Ministries. All rights reserved.
            </p>
            <p style="color: #999999; font-size: 14px; margin: 0;">
              If you have any questions, please contact us at
              <a href="mailto:admin@femilazarus.com" style="color: #D72638;">
                admin@femilazarus.com
              </a>
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
};