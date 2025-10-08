import prismaClient from "../../prisma";

interface DetailOrderRequest {
    order_id: string;
}

class DetailOrderService {

    async execute( { order_id } : DetailOrderRequest ) {

        const detailOrder = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true
            }
        })

        return detailOrder;
    }
}

export { DetailOrderService };