// seed.ts
import { PrismaClient } from '@prisma/client';
import { createHash } from 'crypto';

const prisma = new PrismaClient();

async function seedAdmins() {

  // Create super admin
  const superAdmin = await prisma.admin.upsert({
    where: { email: 'superadmin@africabyafricans.com' },
    update: {
      email: 'superadmin@africabyafricans.com',
      password: createHash('sha256').update('superadmin123').digest('hex'),
      firstName: 'Super',
      lastName: 'Admin',
      role: "admin",
    },
    create: {
      email: 'superadmin@africabyafricans.com',
      password: createHash('sha256').update('superadmin123').digest('hex'),
      firstName: 'Super',
      lastName: 'Admin',
      role: "admin",
    },
  });
  console.log(`Super Admin created: ${superAdmin.email}`);
}


async function main() {
  try {
    await seedAdmins();

    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


  