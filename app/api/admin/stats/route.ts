import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    // In a real application, you'd verify the admin session here
    
    // Get total registrations count
    const totalRegistrations = await prisma.conferenceRegistration.count()

    // Get registrations by day
    const registrationsByDay = await prisma.conferenceRegistration.groupBy({
      by: ['day1Attendance', 'day2Attendance'],
      _count: {
        id: true
      }
    })

    // Get registrations by country
    const registrationsByCountry = await prisma.conferenceRegistration.groupBy({
      by: ['countryOfResidence'],
      _count: {
        id: true
      },
      orderBy: {
        _count: {
          id: 'desc'
        }
      },
      take: 10
    })

    // Get registrations by sector
    const registrationsBySector = await prisma.conferenceRegistration.groupBy({
      by: ['sector'],
      _count: {
        id: true
      },
      orderBy: {
        _count: {
          id: 'desc'
        }
      },
      take: 10
    })

    // Get recent registrations (last 7 days)
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    
    const recentRegistrations = await prisma.conferenceRegistration.count({
      where: {
        createdAt: {
          gte: sevenDaysAgo
        }
      }
    })

    // Get registrations by age range
    const registrationsByAge = await prisma.conferenceRegistration.groupBy({
      by: ['ageRange'],
      _count: {
        id: true
      },
      orderBy: {
        _count: {
          id: 'desc'
        }
      }
    })

    const response = NextResponse.json({
      success: true,
      data: {
        totalRegistrations,
        recentRegistrations,
        registrationsByDay,
        registrationsByCountry,
        registrationsBySector,
        registrationsByAge
      }
    })

    // CORS Headers
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    
    return response

  } catch (error) {
    console.error("Error fetching admin stats:", error)
    return NextResponse.json(
      { 
        error: "Failed to fetch statistics. Please try again later.",
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
