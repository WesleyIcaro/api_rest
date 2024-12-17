import multer from 'multer';

import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    // file para arquivo único e files para arquivos múltiplos
    return upload(req, res, (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new FotoController();
