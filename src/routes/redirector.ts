import { Request, Response, Router } from 'express';
import { SHORT_LINKS } from './base-route.js';
import { redirectRequest } from 'routes/redirector';

const app = Router()

app.get('/:id', (req: Request<redirectRequest.TParams>, res: Response) => {
    const { params: { id } } = req
    const destination: string | null = SHORT_LINKS[id]
    
    if (destination) {
        return res.redirect(destination)
    }
    
    return res.sendStatus(404)
})

export default app
