import { Request, Response } from 'express';
import { ListCategoryService } from '../../services/category/ListCategoryService';

class ListCategoryController {
    
    async handle(req: Request, res: Response) {

        const listCategoryService = new ListCategoryService();

        // Recebe um array com as categorias
        const category = await listCategoryService.execute();

        return res.json(category);
    }
}

export { ListCategoryController };