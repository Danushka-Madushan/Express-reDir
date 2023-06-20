import { Router, Request, Response } from 'express';
import { ExpressResponse } from '../core/utils/response.js';
import { queryRequest, newRequest } from 'routes/base-route';
import { generateKey } from '../core/utils/keyGen.js';
import { Linksdb, fetchKeys } from '../core/firebase/database.js';

const app = Router()

/* Body
{
    'url': 'valid RFC 3986 URI'
}
*/
app.post('/new', async (req: Request<object, object, newRequest.TReq>, res: Response) => {
    const { body: { url } } = req
    const key = await generateKey(8, url)

    ExpressResponse(res, true, 200, {
        link: `https://xtream360.com/${ key }`
    })
    
    await Linksdb.update({ [key]: url })
})

app.get('/directory', async (req: Request<object, object, object, queryRequest.TQuery>, res: Response) => {
    return ExpressResponse(res, true, 200, await fetchKeys())
})

export default app
