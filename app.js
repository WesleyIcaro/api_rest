import express from 'express';
import home from './src/routes/home';

class App {
  constructor() {
    this.app = express();
    this.middllewares();
    this.routes();
  }

  middllewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', home);
  }
}

export default new App().app;
