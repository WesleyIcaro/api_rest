import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Lima',
      email: 'maria@gmail.com',
      idade: 23,
      peso: 57,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
