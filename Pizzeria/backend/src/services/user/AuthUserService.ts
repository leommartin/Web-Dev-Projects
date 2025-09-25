import prismaClient from "../../prisma";
import  {hash, compare} from 'bcryptjs';

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

        // gerar um token JWT e devolver os dados do usuário como id, nome e email

        return { ok: true }; 
    }
}

export { AuthUserService };