import 'dotenv/config';

import express from 'express';

import 'express-async-errors';
import handler from './app/middlewares/handler.middleware';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use((err, req, res, next) => {
      return handler(err, req, res);
    });
  }
}

export default new App().server;
