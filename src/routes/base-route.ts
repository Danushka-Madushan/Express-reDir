import { Router, Request, Response } from 'express';
import { ExpressResponse } from '../core/utils/response.js';
import { queryRequest, newRequest } from 'routes/base-route';
import { generateKey } from '../core/utils/keyGen.js';
import { fetchKeys } from '../core/redis/cache.js';

const app = Router()

app.post('/new', async (req: Request<object, object, newRequest.TReq>, res: Response) => {
    const { body: { url } } = req
    const key = await generateKey(4, url)

    return ExpressResponse(res, true, 200, {
        link: `https://xtream360.com/${ key }`
    })
})

app.get('/directory', async (req: Request<object, object, object, queryRequest.TQuery>, res: Response) => {
    return ExpressResponse(res, true, 200, await fetchKeys())
})

export default app
