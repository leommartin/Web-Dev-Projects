import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute( {email, password}: AuthRequest ) {  

        // Verificar se o email existe
        const user = await prismaClient.user.findFirst({
            where: { 
                email: email 
            }
        });

        if(!user) {
            throw new Error("User/Password incorrect");
        }

        // Verificar se a senha está correta
        // password = senha que o usuário digitou
        // user.password = senha criptografada que está no banco de dados
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("User/Password incorrect");
        }

        // Se deu tudo certo, vamos gerar o token para o usuário
        const token = sign( {
            // Por que name, email? -> Dados que quero guardar no token
            // Esses dados podem ser lidos por qualquer um que tenha o token
            name: user.name,
            email: user.email
        },
        process.env.JWT_SECRET,{ 
            // JWT_SECRET -> Variável de ambiente que guarda a chave secreta para gerar o token
            // process.env.JWT_SECRET -> Chave secreta para autenticar o token
            // O que isso faz? Gera um hash único para cada usuário
            // Assim, mesmo que dois usuários tenham o mesmo nome e email, os tokens serão diferentes
            // Pois a chave secreta é única e privada (só o servidor conhece)
            // Isso aumenta a segurança do token
            
            // subject -> Quem é o dono desse token? (ID do usuário)
            subject: user.id,
            expiresIn: '30d' // Tempo de expiração do token
        })

        return { 
            id: user.id,
            name: user.name,
            email: user.email,
            token: token           
        }; 
    }
}

export { AuthUserService };