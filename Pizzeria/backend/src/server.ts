import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes';

// Cria uma instância do Express
const app = express();

// Esse middleware permite que o Express entenda JSON no corpo das requisições
app.use(express.json());

app.use(router);
 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});