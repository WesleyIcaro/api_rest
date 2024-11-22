import { Router } from 'express';
import FotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', FotoController.store);

export default router;
