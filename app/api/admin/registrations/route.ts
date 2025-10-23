import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    // In a real application, you'd verify the admin session here
    // For now, we'll skip authentication for simplicity
    
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const search = searchParams.get('search') || ''
    
    const skip = (page - 1) * limit

    // Build where clause for search
    const whereClause = search ? {
      OR: [
        { firstName: { contains: search, mode: 'insensitive' as const } },
        { lastName: { contains: search, mode: 'insensitive' as const } },
        { email: { contains: search, mode: 'insensitive' as const } },
        { registrationCode: { contains: search, mode: 'insensitive' as const } },
        { organizationName: { contains: search, mode: 'insensitive' as const } }
      ]
    } : {}

    // Get total count for pagination
    const totalCount = await prisma.conferenceRegistration.count({
      where: whereClause
    })

    // Get registrations with pagination
    const registrations = await prisma.conferenceRegistration.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
        countryOfResidence: true,
        location: true,
        ageRange: true,
        gender: true,
        joiningFromOutsideNigeria: true,
        day1Attendance: true,
        day2Attendance: true,
        currentRole: true,
        seniorityLevel: true,
        organizationName: true,
        sector: true,
        areasOfInterest: true,
        languagesSpoken: true,
        socialMediaHandle: true,
        category: true,
        professionalBackground: true,
        reasonsForAttending: true,
        howDidYouHear: true,
        accessibilityNeeds: true,
        futureEngagement: true,
        profilePhotoUrl: true,
        registrationCode: true,
        submittedAt: true,
        createdAt: true
      }
    })

    const response = NextResponse.json({
      success: true,
      data: {
        registrations,
        pagination: {
          page,
          limit,
          totalCount,
          totalPages: Math.ceil(totalCount / limit),
          hasNext: page < Math.ceil(totalCount / limit),
          hasPrev: page > 1
        }
      }
    })

    // CORS Headers
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    
    return response

  } catch (error) {
    console.error("Error fetching registrations:", error)
    return NextResponse.json(
      { 
        error: "Failed to fetch registrations. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error"
      }, 
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
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
  })
}
