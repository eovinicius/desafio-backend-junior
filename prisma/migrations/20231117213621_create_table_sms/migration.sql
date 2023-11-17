-- CreateTable
CREATE TABLE "Sms" (
    "id" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Sms_pkey" PRIMARY KEY ("id")
);
