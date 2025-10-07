import { Request, Response } from 'express';
import { RemoveItemService } from '../../services/order/RemoveItemService';

class RemoveItemController {

    async handle(req: Request, res: Response) {

        // A requisição vai ser feita via query pq é um delete, utiliza query params
        const item_id = req.query.item_id as string;

        const removeItemService = new RemoveItemService();

        const item = await removeItemService.execute({
            item_id
        });

        return res.json(item);
    }
}   

export { RemoveItemController };