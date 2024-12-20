import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    // file para arquivo único e files para arquivos múltiplos
    return upload(req, res, async(error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        // eslint-disable-next-line camelcase
        const {aluno_id} = req.body;
        // eslint-disable-next-line camelcase
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      // eslint-disable-next-line no-unused-vars
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FotoController();
