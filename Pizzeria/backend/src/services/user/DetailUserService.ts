import prismaClient from "../../prisma";

class DetailUserService {
    // Controller vai passar o id do usuário para esse service
    // Esse id vem do token que foi decodificado no middleware isAuthenticated
    async execute(user_id: string) {
        
        // Busca o usuário pelo id no banco de dados
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        });

        // Retorna os dados do usuário
        return user;
    }
}

export { DetailUserService };