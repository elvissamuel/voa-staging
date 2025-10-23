import { PrismaClient } from '@prisma/client'
import { createHash } from 'crypto'

const prisma = new PrismaClient()

async function createAdmin() {
  try {
    const email = process.argv[2]
    const password = process.argv[3]
    const firstName = process.argv[4] || 'Admin'
    const lastName = process.argv[5] || 'User'

    if (!email || !password) {
      console.error('Usage: npx tsx scripts/create-admin.ts <email> <password> [firstName] [lastName]')
      process.exit(1)
    }

    // Hash the password
    const hashedPassword = createHash('sha256').update(password).digest('hex')

    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { email }
    })

    if (existingAdmin) {
      console.error('Admin with this email already exists')
      process.exit(1)
    }

    // Create the admin
    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: 'admin'
      }
    })

    console.log('Admin created successfully:')
    console.log(`ID: ${admin.id}`)
    console.log(`Email: ${admin.email}`)
    console.log(`Name: ${admin.firstName} ${admin.lastName}`)
    console.log(`Role: ${admin.role}`)

  } catch (error) {
    console.error('Error creating admin:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin()
