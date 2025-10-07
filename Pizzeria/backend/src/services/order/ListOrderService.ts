import prismaClient from "../../prisma";

class ListOrderService {

    async execute() {
        
        const orders = await prismaClient.order.findMany({
            where: {
                draft: false, // Listando apenas pedidos que foram enviados (não são rascunhos)
                status: false // Listando apenas pedidos que não estão prontos
            },
            orderBy: {
                createdAt: 'desc' // Ordens mais recentes primeiro
            }
        })

        return orders;
    }
}

export { ListOrderService };