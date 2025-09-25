
// import { Router, Request, Response } from 'express'; Request e Response são usados no controller
import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();


// -- Rotas de Usuários

// -- Rota de criação de usuário 
router.post('/users', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

export { router };