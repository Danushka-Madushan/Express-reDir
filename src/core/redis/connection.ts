import { createClient } from 'redis'
import { upsertRecord } from './cache.js'
import { fetchKeys } from '../firebase/database.js'

/* Create Redis Client */
export const RedisClient = createClient()

RedisClient.on('error', (err) => {
    console.log('Redis Client Error', err)
})

/*
    When Redis client is ready load all
    keys from firebase to redis-cache
*/
RedisClient.on('ready', async () => {
    const KeyRecords = await fetchKeys()

    const w1: Array<Promise<boolean>> = []

    for (const { key, destination } of KeyRecords) {
        w1.push(upsertRecord(key, destination))
    }

    await Promise.all(w1)

    console.log('Redis Connected!')
})

/* Connect Redis-Client */
await RedisClient.connect()
