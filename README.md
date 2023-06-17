##### URL Redirection Service

`API Usage`

> POST
> 
> ```bash
> curl --location 'https://xtream360.com/api/new' \
> --header 'Content-Type: application/json' \
> --data '{
>     "url": "https://github.com/Danushka-Madushan/Express-reDir"
> }'
> ```
> 
> ```json
> {
>     "success": true,
>     "data": {
>         "link": "https://xtream360.com/xGn8"
>     }
> }
> ```

> GET
> 
> ```bash
> curl --location 'https://xtream360.com/api/directory'
> ```
> 
> ```json
> {
>     "success":true,
>     "data":[
>         {
>             "key":"xGn8",
>             "destination":"https://github.com/Danushka-Madushan/Express-reDir"
>         }
>     ]
> }
> ```

> GET
> 
> ```bash
> curl --location 'https://xtream360.com/api/version'
> ```
> 
> ```json
> {
>     "status":"OK",
>     "version":"1.4.0",
>     "message":"server is up and running..."
> }
> ```
