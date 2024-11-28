// Módulos locais em cima dos módulos externos
import { Router } from 'express';
import multer from 'multer';

import FotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), FotoController.store);

export default router;
