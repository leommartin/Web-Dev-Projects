
// import { Router, Request, Response } from 'express'; Request e Response são usados no controller
import { Router } from 'express';


import { CreateUserController } from './controllers/user/createUserController';

const router = Router();


// -- Rotas de Usuários

// -- Rota de criação de usuário 
router.post('/users', new CreateUserController().handle);

export { router };