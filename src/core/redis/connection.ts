import { createClient } from 'redis'

export const RedisClient = createClient()

RedisClient.on('error', (err) => {
    console.log('Redis Client Error', err)
})

RedisClient.on('ready', () => {
    console.log('Redis Connected!')
})

await RedisClient.connect()
