import prismaClient from '../../prisma';

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

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password, // Precisa ser ocultada na resposta
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