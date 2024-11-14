import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {

    res.json('Ok');
  }
}

export default new AlunoController();
