import {
    Request,
    Response
} from 'express';
import ticketService from '../services/ticketService.js';

class ticketController {
    async getOne(req: Request, res: Response) {
        try {
            const data = await ticketService.getOne(req.params.id);
            return res.json(data);
        } catch (e: any) {
            res.status(500).send({
                message: e.message
            });
        }
    }
}

export default new ticketController()