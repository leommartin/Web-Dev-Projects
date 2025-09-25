import {Request, response, Response} from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';

// Controller: Recebe a requisição, envia pro serviço e devolve uma resposta

class CreateUserController {

    // Método handle: Recebe a requisição (Request) e devolve uma resposta (Response)
    async handle(req: Request, res: Response) {

        // Dados que vem na requisição
        const {name , email, password} = req.body;
        // console.log(req.body);

        // Instanciando o serviço e inicilizando/executando
        const createUserService = new CreateUserService();
        const userServiceResponse = await createUserService.execute( {
            name,
            email,
            password
        });

        return res.json(userServiceResponse); 
    }
}

export { CreateUserController }