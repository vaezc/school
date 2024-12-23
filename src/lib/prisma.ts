import { PrismaClient } from "@prisma/client";

const prismaSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaSingleton>;
};

export const prisma = globalThis.prismaGlobal ?? prismaSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
