import { PrismaClient } from '@prisma/client';

export class UserRepository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
}
