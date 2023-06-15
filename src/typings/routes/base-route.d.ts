declare module 'routes/base-route' {
    type Data = {
        key: string,
        value: string | object | Array<object>
    }

    export namespace queryRequest {
        interface TQuery {
            url?: string
        }
    }

    export namespace newRequest {
        interface TReq {
            url: string
        }
    }
}
