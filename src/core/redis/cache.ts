import { RedisClient } from './connection.js'

export const findRecord = async (key: string) => {
    const dest = await RedisClient.get(key)
    if (dest) { return dest }
    return false
}

export const insertRecord = async (key: string, value: string) => {
    if (await RedisClient.exists(key) === 1) {
        return false
    }

    await RedisClient.set(key, value, {
        EX: 30 * 24 * 60 * 60,
        NX: true
    })

    return true
}

export const fetchKeys = async (): Promise<object> => {
    interface TKeys {
        key: string,
        destination: string | false
    }

    const keys: TKeys[] = []

    for await (const key of RedisClient.scanIterator()) {
        const value = await RedisClient.get(key)
        keys.push({
            key: key,
            destination: value ?? false
        })
    }

    return keys
}
