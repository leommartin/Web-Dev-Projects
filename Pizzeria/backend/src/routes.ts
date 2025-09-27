
// import { Router, Request, Response } from 'express'; Request e Response são usados no controller
import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';

const router = Router();

// -- ROTAS DE USUÁRIO

// Rota de criação de usuário 
router.post('/users', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

// Rota para pegar os dados do usuário autenticado/logado
// isAuthenticated -> Middleware que verifica se o usuário está autenticado antes de acessar essa rota
router.get('/me', isAuthenticated, new DetailUserController().handle);

// -- ROTAS DE CATEGORIA

// Rota para cadastrar uma categoria (apenas para usuários logados)
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

export { router };