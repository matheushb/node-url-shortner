export type userEntity = {
  id: string;
  email: string;
  password: string;
  name: string | null;
  url?: string[];
  createdAt: Date;
  updatedAt: Date;
};
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nome do usuário
 *           example: Matheus Baraldi
 *         email:
 *           type: string
 *           description: Email do usuário
 *           example: matheusbaraldi@mail.com
 *         password:
 *           type: string
 *           description: Senha do usuário
 *     ReturnUser:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID do usuário
 *         name:
 *           type: string
 *           description: Nome do usuário
 *           example: Matheus Baraldi
 *         email:
 *           type: string
 *           description: Email do usuário
 *           example: matheusbaraldi@mail.com
 *         createdAt:
 *           type: string
 *           description: Data de criação do livro
 *           example: 2024-03-01T00:00:00.000Z
 *         updatedAt:
 *           type: string
 *           description: Data de atualização do livro
 *           example: 2024-03-01T00:00:00.000Z
 *     ReturnUserWithToken:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID do usuário
 *         name:
 *           type: string
 *           description: Nome do usuário
 *           example: Matheus Baraldi
 *         email:
 *           type: string
 *           description: Email do usuário
 *           example: matheusbaraldi@mail.com
 *         access_token:
 *           type: string
 *           description: JWT Token
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjQwMzQwMzQwMzQwMzQwMzQwMzQwMzQiLCJlbWFpbCI6Im1hdGhldXNiYXJhn
 *         createdAt:
 *           type: string
 *           description: Data de criação do livro
 *           example: 2024-03-01T00:00:00.000Z
 *         updatedAt:
 *           type: string
 *           description: Data de atualização do livro
 *           example: 2024-03-01T00:00:00.000Z
 */
