import { Request, Response } from 'express';
import { UserService } from './user.service';

export class UserController {
  constructor(private readonly userService: UserService) {}

  async create(req: Request, res: Response) {
    const user = await this.userService.create(req.body);
    res.status(201).send(user);
  }

  async findAll(req: Request, res: Response) {
    const users = await this.userService.findAll();
    res.status(200).send(users);
  }

  async findOne(req: Request, res: Response) {
    const user = await this.userService.findOne(req.params.id);
    res.status(200).send(user);
  }

  async update(req: Request, res: Response) {
    const user = await this.userService.update(req.params.id, req.body);
    res.status(200).send(user);
  }

  async remove(req: Request, res: Response) {
    await this.userService.remove(req.params.id);
    res.status(204).send();
  }
}
