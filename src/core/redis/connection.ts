import { createClient } from 'redis'
import { ENV } from '../../config/config.js'

export const RedisClient = createClient({
    password: ENV.REDIS_KEY,
    socket: {
        host: ENV.REDIS_API,
        port: 17823
    }
})

RedisClient.on('error', (err) => {
    console.log('Redis Client Error', err)
})

RedisClient.on('ready', () => {
    console.log('Redis Connected!')
})

await RedisClient.connect()
