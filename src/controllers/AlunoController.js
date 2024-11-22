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

      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Faltando o ID']
        });
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }

      const novoAluno = await aluno.update(req.body);

      const { id, nome, email, idade, peso, altura } = novoAluno;

      return res.json({ id, nome, email, idade, peso, altura });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
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

      return res.json(aluno);
    } catch (e) {
      return res.status.json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async delete(req,res) {
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

      await aluno.destroy();

      return res.json({
        apagado: true
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

}

export default new AlunoController();
