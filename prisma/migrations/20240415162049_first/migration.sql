-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firtName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "profileImageURL" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
