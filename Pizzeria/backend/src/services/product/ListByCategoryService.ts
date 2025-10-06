import prismaClient from "../../prisma";

// Vai receber um category_id e listar com base nesse id os produtos da categoria

interface ProductRequest{
    category_id: string;
}

class ListByCategoryService {
    
    // Quem chamar o execute deve passar um objeto com o category_id
    // Execute vai retornar uma lista de produtos
    async execute({ category_id }: ProductRequest) {

        const findByCategory = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        })
    
        return findByCategory;
    }

}

export { ListByCategoryService }; 
