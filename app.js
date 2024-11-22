import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import home from './src/routes/home';
import user from './src/routes/user';
import token from './src/routes/token';
import aluno from './src/routes/aluno';
import foto from './src/routes/foto';

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
    this.app.use('/users/', user);
    this.app.use('/token/', token);
    this.app.use('/aluno/', aluno);
    this.app.use('/foto/', foto);
  }
}

export default new App().app;
