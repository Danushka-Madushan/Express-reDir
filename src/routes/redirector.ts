import { Request, Response, Router } from 'express';
import { redirectRequest } from 'routes/redirector';
import { findRecord } from '../core/redis/cache.js';
import { DOMAIN_CONFIG } from '../config/config.js';

const app = Router()

/* Redirect the user to WebApp */
app.get('/', (req: Request, res: Response) => {
    return res.redirect(`https://${ DOMAIN_CONFIG.subDomain }.${ DOMAIN_CONFIG.Domain }`)
})

/* Redirector */
/*
   This will look for a value under provided parameter, if present the request
   will be redirected to the destination under the key. if not present a 404
   not found will be send as resoponse
*/
app.get('/:id', async (req: Request<redirectRequest.TParams>, res: Response) => {
    const { params: { id } } = req
    const destination: string | false = await findRecord(id)

    if (destination) {
        return res.redirect(destination)
    }
    return res.sendStatus(404)
})

export default app
