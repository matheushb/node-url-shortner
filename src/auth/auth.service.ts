import { UserService } from '../user';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { LoginDto } from './dto/login.dto';
import { UnauthorizedException } from '../common/exceptions/unauthorized.exception';
import { CreateUserDto } from '../user/dtos';
import { userEntity } from '../user/entity/user.entity';
import { JWT_SECRET } from '../common/constants';

export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signin(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.userService.findByEmail(email);

    if (!user) throw new UnauthorizedException('Usuário ou senha inválidos');

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword)
      throw new UnauthorizedException('Usuário ou senha inválidos');

    const token = this.signToken(user);

    return { access_token: token };
  }

  async signup(createUserDto: CreateUserDto) {
    const user = (await this.userService.create(createUserDto)) as any;

    const token = this.signToken(user);

    return { user, access_token: token };
  }

  private signToken(user: Partial<userEntity>) {
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '7d',
    });
  }
}
