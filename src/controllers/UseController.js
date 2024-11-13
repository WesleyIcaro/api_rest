import User from '../models/User';

class UseController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err => err.message))
      });
    }
  }

  async index(req, res) {
    try {
      console.log('USER ID', req.userId);
      console.log('USER EMAIL', req.userEmail);
      const users = await User.findAll({ attributes: [ 'id', 'nome', 'email' ] });

      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err => err.message))
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id
        // , {attributes: [ 'id', 'nome', 'email' ]}
      );
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err => err.message))
      });
    }
  }

  async update(req, res) {
    // Sempre lembrar de verificar no model de update se o usuário está enviado a senha para não dar erro
    try {
      if (!req.userId) {
        return res.status(400).json({
          errors: ['Faltando ID']
        });
      }

      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe']
        });
      }

      const userUpdate = await user.update(req.body);
      return res.json(userUpdate);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err => err.message))
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Faltando ID']
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe']
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err => err.message))
      });
    }
  }

}

export default new UseController();
