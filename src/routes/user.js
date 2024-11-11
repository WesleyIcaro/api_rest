import { Router } from 'express';
import userController from '../controllers/UseController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
index -> Lita todos os usuários -> GET
store/crete -> Cria um nono usuário -> POST
delete -> Apaga um usuário -> DELETE
show -> Mostra um usuário -> GET
update -> Atualiza um usuário -> PATCH ou PUT
*/