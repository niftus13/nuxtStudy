// server/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// 타입 확장
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

// 싱글톤 인스턴스 생성 (개발환경에서 재사용, 운영에선 항상 new)
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// 개발 환경일 경우 전역 객체에 저장 (HMR로 인한 중복 생성 방지)
if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma
  }