import { Router } from 'express';
import userController from '../controllers/UseController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', loginRequired, userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> Lita todos os usuários -> GET
store/crete -> Cria um nono usuário -> POST
delete -> Apaga um usuário -> DELETE
show -> Mostra um usuário -> GET
update -> Atualiza um usuário -> PATCH ou PUT
*/
