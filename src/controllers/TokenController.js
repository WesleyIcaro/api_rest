import User from '../models/User';

class TokenController {
  async store(req, res) {
    // Ao fazer esta desestruturação com atribuição vazia nos protege se não enviar o email ou password, sempre será enviado vazio o que garante o erro se não houver nenhum dos dois na requisição
    const { email = '', password = '' } = req.body;

    console.log(email, password);

    res.json('OK');
  }
}

export default new TokenController();
