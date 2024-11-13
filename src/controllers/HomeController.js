import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Jose',
      sobrenome: 'Honorio',
      email: 'Jose@gmail.com',
      idade: 125,
      peso: 90,
      altura: 1.82,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
