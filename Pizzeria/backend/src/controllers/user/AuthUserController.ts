
// Importamos Request, Response do Express para tipar os parâmetros do método handle
import {Request, Response} from 'express';
import { AuthUserService } from '../../services/user/AuthUserService';

class AuthUserController {

    // Método handle: Recebe a requisição (Request) e devolve uma resposta (Response)
    async handle(req: Request, res: Response) {

        //Dados que vem na requisição
        const { email, password } = req.body;

        // Instancia o serviço de autenticação
        const authUserService = new AuthUserService();

        // Executa o serviço de autenticação usando await (já que é uma função assíncrona)
        // Guarda a resposta na variável authResponse
        const authResponse = await authUserService.execute( {
            // await faz a execução esperar a resposta da função para prosseguir
            email,
            password
        });

        return res.json(authResponse);
    }
}

export { AuthUserController }