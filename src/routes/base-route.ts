import { Router, Request, Response } from 'express';
import crypto from 'crypto'
import { ExpressResponse } from '../core/utils/response.js';
import { queryRequest, newRequest } from 'routes/base-route';
import { TRes } from 'utils/response';

const app = Router()

interface TShortLinks {
    [key: string]: string
}

export const SHORT_LINKS: TShortLinks = {}

app.post('/new', (req: Request<object, object, newRequest.TReq>, res: Response) => {
    const { body: { url } } = req

    const randomString = crypto.randomBytes(6).toString('hex')
    SHORT_LINKS[randomString] = url

    return ExpressResponse(res, true, 200, {
        link: `https://xtream360.com/${ randomString }`
    })
})

app.get('/query', (req: Request<queryRequest.TParams, TRes, queryRequest.TReq, queryRequest.TQuery>, res: Response) => {
    const response = {
        params: req.params.city,
        body: req.body.data,
        query: req.query.user
    }
    return ExpressResponse(res, true, 200, response)
})

export default app
