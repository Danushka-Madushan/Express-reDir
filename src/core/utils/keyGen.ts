import { insertRecord } from '../redis/cache.js'

export const generateKey = async (length: number, url: string): Promise<string> => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length

    const randomStringArray = Array.from({ length }, () => {
        return characters.charAt(Math.floor(Math.random() * charactersLength))
    })

    const key = randomStringArray.join('')
    const success = await insertRecord(key, url)
    
    if (success) { return key }
    return await generateKey(length, url)
}
