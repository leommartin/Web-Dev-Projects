
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    
    // return res.json({ nome: 'Sujeito Pizza' });

    // imprime 'error: Erro ao fazer essa requisição');
    // throw new Error('Erro ao fazer essa requisição');

    return res.json({ nome: 'Matheus'});

});

export { router };