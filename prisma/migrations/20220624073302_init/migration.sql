-- CreateTable
CREATE TABLE "Person" (
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "favColor" TEXT NOT NULL,
    "department" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_phone_key" ON "Person"("phone");
