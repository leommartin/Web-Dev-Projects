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
        
        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            }
        })

        return product;

    }
}

export { CreateProductService };