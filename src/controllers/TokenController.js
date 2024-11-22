import User from '../models/User';
import jwt from 'jsonwebtoken';

class TokenController {
  async store(req, res) {
    // Ao fazer esta desestruturação com atribuição vazia nos protege se não enviar o email ou password, sempre será enviado vazio o que garante o erro se não houver nenhum dos dois na requisição
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas']
      });
    }

<<<<<<< HEAD
    const user = await User.findOne({where: { email }});
=======
    const user = await User.findOne({ where: { email } });
>>>>>>> d7da57e357b7381f1558e1589a958693063b5bea

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe']
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
<<<<<<< HEAD
        errors: ['Senha inválida']
      });
    }

    const {id} = user;
=======
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;
>>>>>>> d7da57e357b7381f1558e1589a958693063b5bea

    // eslint-disable-next-line no-undef
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      // eslint-disable-next-line no-undef
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

<<<<<<< HEAD
    return res.json({token});
=======
    res.json({token, user: { nome: user.nome, id, email }});
>>>>>>> d7da57e357b7381f1558e1589a958693063b5bea
  }
}

export default new TokenController();
