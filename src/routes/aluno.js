import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', alunoController.store);
router.put('/', alunoController.update);
router.get('/', alunoController.show);
router.delete('/', alunoController.delete);

export default router;
