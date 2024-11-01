import express from 'express';

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

  }
}
