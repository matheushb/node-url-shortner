import { PrismaClient } from '@prisma/client';
import { userEntity } from './entity/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

export class UserRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prismaClient.user.create({
      data: createUserDto,
    });
  }

  findAll(): Promise<userEntity[]> {
    return this.prismaClient.user.findMany();
  }

  async findOne(id: string): Promise<userEntity | null> {
    return await this.prismaClient.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<userEntity | null> {
    return await this.prismaClient.user.findUnique({ where: { email } });
  }

  async update(id: string, updateUserDto: any) {
    const user = await this.prismaClient.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    await this.prismaClient.user.delete({ where: { id } });
  }
}
