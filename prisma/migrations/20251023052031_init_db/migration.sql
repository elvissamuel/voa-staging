-- CreateTable
CREATE TABLE "conference_registrations" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "countryOfResidence" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "ageRange" TEXT NOT NULL,
    "joiningFromOutsideNigeria" TEXT NOT NULL,
    "day1Attendance" TEXT NOT NULL,
    "day2Attendance" TEXT NOT NULL,
    "currentRole" TEXT NOT NULL,
    "seniorityLevel" TEXT NOT NULL,
    "organizationName" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "areasOfInterest" TEXT NOT NULL,
    "languagesSpoken" TEXT NOT NULL,
    "socialMediaHandle" TEXT,
    "category" TEXT NOT NULL,
    "professionalBackground" TEXT NOT NULL,
    "reasonsForAttending" TEXT NOT NULL,
    "howDidYouHear" TEXT NOT NULL,
    "accessibilityNeeds" TEXT,
    "futureEngagement" TEXT NOT NULL,
    "consent" BOOLEAN NOT NULL,
    "profilePhotoUrl" TEXT,
    "profilePhotoPublicId" TEXT,
    "profilePhotoName" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL,
    "registrationCode" TEXT NOT NULL,

    CONSTRAINT "conference_registrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "role" TEXT NOT NULL DEFAULT 'admin',

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "conference_registrations_email_key" ON "conference_registrations"("email");

-- CreateIndex
CREATE UNIQUE INDEX "conference_registrations_registrationCode_key" ON "conference_registrations"("registrationCode");

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");
