import User from '../models/User';

class UseController {
  async store(req, res) {
    try {
      const novoUser = await User.create({
        nome: 'Maria',
        email: 'maria@gmail.com',
        password: '123456'
      });
      res.json(novoUser);
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new UseController();
