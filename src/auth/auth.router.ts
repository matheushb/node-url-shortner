import { Request, Response, Router } from 'express';
import { AuthController, AuthService } from './index';
import { UserRepository, UserService } from '../user';
import { loginDto } from './dto/login.dto';
import { PrismaClient } from '@prisma/client';

const authController = new AuthController(
  new AuthService(new UserService(new UserRepository(new PrismaClient())))
);

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Rota para operações relacionadas a autenticação
 */
const router = Router();

/**
 * @swagger
 * /signin:
 *   post:
 *     tags: [Auth]
 *     summary: Faz login de um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReturnLogin'
 * */
// authRoutes.post(
//   '/signin',
//   validate(loginDto),
//   asyncErrorHandler(async (req: Request, res: Response) => {
//     await authController.signin(req, res);
//   })
// );
router.post('/signin', (req: Request, res: Response) =>
  authController.signin(req, res)
);

/**
 * @swagger
 * /signup:
 *   post:
 *     tags: [Auth]
 *     summary: Registra um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReturnUserWithToken'
 * */
// authRoutes.post(
//   '/signup',
//   validate(createUserDto),
//   asyncErrorHandler(async (req: Request, res: Response) => {
//     await authController.signup(req, res);
//   })
// );
router.post('/signup', (req: Request, res: Response) =>
  authController.signup(req, res)
);

export default router;
