import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface PayLoad{
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {

    console.log("Passou no middleware isAuthenticated");

    // Receber o token
    // Token sempre vem da requisição (do cabeçalho)
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(401).end(); // 401 = Não autorizado
    }

    const [, token] = authToken.split(" "); // "Bearer eyJhGciOi(etc...)"
    // ignorar o Bearer e pegar só o token

    // console.log(token);

    try{
        // Validar o token
        // Método verify: verifica se o token é válido (se foi gerado pela gente e se não expirou)
        // Se o token for inválido, vai lançar um erro
        // Se for válido, vai retornar o payload que foi usado para gerar o token
        
        // sub -> id do usuário
        const { sub } = verify(
            token,
            process.env.JWT_SECRET 
        ) as PayLoad;

        console.log("user id:", sub);
        
        // Continua a execução
        return next();

    }catch(err) {

        return res.status(401).end();
    }

    
}