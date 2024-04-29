import { PrismaClient } from '@prisma/client';
import express from 'express';
import appRouter from './app.router';

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

  middlewares() {}

  routes() {
    this.app.use(appRouter);
  }
}

export default new App().app;
