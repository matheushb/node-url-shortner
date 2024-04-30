import { PrismaClient } from '@prisma/client';
import express from 'express';
import appRouter from './app.router';
import userRouter from './user/user.router';
import authRouter from './auth/auth.router';
import { opts, specs } from './common/swagger/swagger-config';
import swaggerUi from 'swagger-ui-express';

const prismaClient = new PrismaClient();

class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    prismaClient
      .$connect()
      .then(() => {
        console.log('Database connected');
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api', swaggerUi.serve, swaggerUi.setup(specs, opts));
    this.app.use(appRouter);
    this.app.use(userRouter);
    this.app.use(authRouter);
  }
}

export default new App().app;
