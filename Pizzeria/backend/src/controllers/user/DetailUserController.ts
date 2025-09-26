import { Request, Response } from 'express';
import { DetailUserService } from '../../services/user/DetailUserService';

// Controller: Recebe a requisição, chama o service e devolve uma resposta
// Controller é chamado pela rota
class DetailUserController {
    async handle(req: Request, res: Response) {

        // Recuperar o id do usuário que foi colocado dentro do req pelo middleware isAuthenticated
        const user_id = req.user_id;

        // Chamar o service
        const detailUserService = new DetailUserService();

        // Executar o service que vai buscar o usuário pelo id no banco de dados e rotornar os dados do mesmo
        const user = await detailUserService.execute(user_id);

        return res.json(user);

    }
}

export { DetailUserController };
