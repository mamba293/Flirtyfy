import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

console.log("Prisma Client initialization started...");
const client = globalThis.prisma || new PrismaClient();
console.log("Prisma Client initialized");

if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
