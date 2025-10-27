import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createHash, randomBytes } from 'crypto'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      )
    }

    // Find admin by email
    const admin = await prisma.admin.findUnique({
      where: { email }
    })

    if (!admin) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    // Hash the provided password and compare with stored hash
    const hashedPassword = createHash('sha256').update(password).digest('hex')
    
    if (admin.password !== hashedPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    // Generate a simple session token
    const sessionToken = randomBytes(32).toString('hex')

    // In a real application, you'd store this in a session store or database
    // For now, we'll return it in the response
    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      data: {
        admin: {
          id: admin.id,
          email: admin.email,
          firstName: admin.firstName,
          lastName: admin.lastName,
          role: admin.role
        },
        sessionToken
      }
    })

    // Set session token as HTTP-only cookie
    response.cookies.set('admin-session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 hours
    })

    return response

  } catch (error) {
    console.error("Error in admin login:", error)
    return NextResponse.json(
      { 
        error: "Login failed. Please try again later.",
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
