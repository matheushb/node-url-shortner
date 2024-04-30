import { CreateUserDto, UpdateUserDto } from './dtos/index';
import { NotFoundException } from '../common/exceptions/not-found-exception';
import { userEntity } from './entity/user.entity';
import { UserRepository } from './user.repository';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }

  async findAll(): Promise<userEntity[]> {
    return await this.userRepository.findAll();
  }

  async findOne(id: string): Promise<userEntity | null> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async findByEmail(email: string): Promise<userEntity | null> {
    return await this.userRepository.findByEmail(email);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.update(id, updateUserDto);
    return user;
  }

  async remove(id: string) {
    return await this.userRepository.remove(id);
  }
}
