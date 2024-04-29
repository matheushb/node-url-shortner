import { PrismaClient } from '@prisma/client';

export class UrlRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
}
