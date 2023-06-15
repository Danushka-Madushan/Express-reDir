import { Request, Response, Router } from 'express';
import { redirectRequest } from 'routes/redirector';
import { findRecord } from '../core/redis/cache.js';

const app = Router()

app.get('/:id', async (req: Request<redirectRequest.TParams>, res: Response) => {
    const { params: { id } } = req
    const destination: string | false = await findRecord(id)

    if (destination) {
        return res.redirect(destination)
    }
    return res.sendStatus(404)
})

export default app
