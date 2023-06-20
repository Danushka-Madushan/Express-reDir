import { upsertRecord } from '../redis/cache.js';
import { Linksdb } from './database.js';

/*
    When a key updates on the firebase below function will
    trigger and update the key in redis cache
*/
Linksdb.on('child_changed', async (snapshot) => {
    await upsertRecord(snapshot.key, snapshot.val() as string)
})
