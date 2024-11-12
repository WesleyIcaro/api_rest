import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Marinalva',
      sobrenome: 'Lima',
      email: 'maria@gmail.com',
      idade: 37,
      peso: 72,
      altura: 1.63,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
