import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {

    // É obrigatório passar todos os dados (nome, email, password) no Controller
    async execute( {name, email, password}: UserRequest ) {

        // Verificar se o email já está cadastrado

        // Verifica se foi passado um email
        if(!email) {
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if(userAlreadyExists) {
            throw new Error("User already exists");
        }

        // Criptografar a senha
        // 8 é o nível de complexidade da hash
        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                // password: password, // Precisa ser ocultada na resposta
                password: passwordHash,
            },
            select: { // Seleciona apenas os campos que quero retornar
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserService }