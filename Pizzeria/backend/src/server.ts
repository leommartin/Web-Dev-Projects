import express, { Request, Response, NextFunction } from 'express'
// import 'express-async-errors';
import cors from 'cors';

import { router } from './routes'

// Cria uma instância do Express
const app = express();

// Esse middleware permite que o Express entenda JSON no corpo das requisições
app.use(express.json());
app.use(cors());

app.use(router);

// Todas as rotas passam por esse Middleware
// Trata erros no Express, captura qualquer erro lançado em rotas/middlewares anteriores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    if(err instanceof Error) {
        // Se for uma instância do tipo Error
        return res.status(400).json( {
            error: err.message // imprime a mensagem que está em routes.ts de error
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })

    
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});