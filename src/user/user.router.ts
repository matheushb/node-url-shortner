import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { UserController, UserRepository, UserService } from './index';

const userController = new UserController(
  new UserService(new UserRepository(new PrismaClient()))
);

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Rotas para operações relacionadas a usuários
 */
const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Users]
 *     responses:
 *        200:
 *          description: Lista de usuários retornada com sucesso
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/ReturnUser'
 * */
router.get('/users', (req, res) => userController.findAll(req, res));

/**
 * @swagger
 * /users/id/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser retornado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: usuário retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReturnUser'
 * */
router.get('/users/id/:id', (req, res) => userController.findOne(req, res));

/**
 * @swagger
 * /users/id/{id}:
 *   patch:
 *     summary: Atualiza um usuário existente pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReturnUser'
 * */
router.patch('/users/id/:id', (req, res) => userController.update(req, res));

/**
 * @swagger
 * /users/id/{id}:
 *   delete:
 *     summary: Exclui um usuário existente pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser excluído
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: usuário excluído com sucesso
 */
router.delete('/users/id/:id', (req, res) => userController.remove(req, res));

export default router;
