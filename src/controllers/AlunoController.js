import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      res.json(alunos);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);

      res.json(novoAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async update(req,res) {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando o ID']
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {

      }

    } catch (e) {

    }
  }

  async show(req,res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando o ID']
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }

      res.json(aluno);
    } catch (e) {
      return res.status.json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

}

export default new AlunoController();
