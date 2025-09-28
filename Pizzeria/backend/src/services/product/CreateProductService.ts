import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;       // imagem
    category_id: string;
}

class CreateProductService {

    // Quem chamar o execute deve passar um objeto com os dados do produto
    async execute( { name, price, description, banner, category_id } : ProductRequest ) {
        
        return {ok : true};
    }
}

export { CreateProductService };