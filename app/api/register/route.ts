import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { conferenceRegistrationSchema } from '@/lib/validations/conference-registration'
import { sendRawMail } from '@/lib/send-mail-api'
import { getConferenceRegistrationEmailTemplate } from '@/lib/email-template'

export async function POST(req: NextRequest) {
  try {
    const validation = conferenceRegistrationSchema.safeParse(await req.json());

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.issues }, { status: 400 });
    }

    const {
      firstName,
      lastName,
      email,
      gender,
      phoneNumber,
      countryOfResidence,
      location,
      ageRange,
      joiningFromOutsideNigeria,
      day1Attendance,
      day2Attendance,
      currentRole,
      seniorityLevel,
      organizationName,
      sector,
      areasOfInterest,
      languagesSpoken,
      socialMediaHandle,
      category,
      professionalBackground,
      reasonsForAttending,
      howDidYouHear,
      accessibilityNeeds,
      futureEngagement,
      consent,
      profilePhotoUrl,
      profilePhotoPublicId,
      profilePhotoName,
      submittedAt
    } = validation.data;

    // Check if user with email already exists
    const existingRegistration = await prisma.conferenceRegistration.findUnique({
      where: {
        email: email
      }
    });

    if (existingRegistration) {
      return NextResponse.json(
        { error: "A registration with this email already exists" },
        { status: 400 }
      );
    }

    // Use a transaction to ensure both registration creation and email sending succeed
    const result = await prisma.$transaction(async (tx) => {
      // Get total count of existing registrations to generate sequential code
      const existingRegistrationsCount = await tx.conferenceRegistration.count();
      const nextRegistrationNumber = existingRegistrationsCount + 1;
      const registrationCode = `TAC-${String(nextRegistrationNumber).padStart(4, '0')}`;

      // Create new registration
      const registration = await tx.conferenceRegistration.create({
        data: {
          // Section 1: Personal Information
          firstName,
          lastName,
          email,
          gender,
          phoneNumber,
          countryOfResidence,
          location,
          ageRange,

          // Section 2: Conference Participation
          joiningFromOutsideNigeria,
          day1Attendance,
          day2Attendance,

          // Section 3: Background & Interests
          currentRole,
          seniorityLevel,
          organizationName,
          sector,
          areasOfInterest,
          languagesSpoken,
          socialMediaHandle: socialMediaHandle || null,

          // Section 4: Intentions, Access & Engagement
          category,
          professionalBackground,
          reasonsForAttending,
          howDidYouHear,
          accessibilityNeeds: accessibilityNeeds || null,
          futureEngagement,

          // Section 5: Consent
          consent,

          // Profile Photo Information
          profilePhotoUrl: profilePhotoUrl || null,
          profilePhotoPublicId: profilePhotoPublicId || null,
          profilePhotoName: profilePhotoName || null,

          // Submission timestamp
          submittedAt: new Date(submittedAt)
        },
      });

      // Send confirmation email with the generated registration code
      const emailResult = await sendRawMail(
        registration.email,
        "Conference Registration Confirmation - Welcome to Africa Conference 2025",
        getConferenceRegistrationEmailTemplate(registration, registrationCode)
      );

      // If email sending fails, throw an error to rollback the transaction
      if (!emailResult || emailResult.error) {
        throw new Error('Failed to send confirmation email');
      }

      return { registration, registrationCode };
    });

    const response = NextResponse.json({
      success: true,
      message: `Success! You have been successfully registered! A confirmation email has been sent to ${result.registration.email}`,
      data: {
        id: result.registration.id,
        email: result.registration.email,
        firstName: result.registration.firstName,
        lastName: result.registration.lastName,
        registrationCode: result.registrationCode
      }
    });
    
    // CORS Headers
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return response;
  } catch (error) {
    console.error("Error in registration process:", error);
    return NextResponse.json(
      { 
        error: "Registration failed. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error"
      }, 
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
