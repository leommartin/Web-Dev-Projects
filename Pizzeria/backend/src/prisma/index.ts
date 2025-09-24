// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/prisma/client';

// Com o Prisma Client, podemos acessar models do banco de dados
// Fazer consultas, criar registros, atualizar, deletar, etc
const prismaClient = new PrismaClient();

export default prismaClient;