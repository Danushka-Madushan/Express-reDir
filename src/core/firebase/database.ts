import { firedb } from './firebase.js';
import { TDatabase } from 'firebase/database';

export const Linksdb = firedb.child('links')

/*
    Fetch all the keys and values from firebase
*/
export const fetchKeys = async (): Promise<Array<TDatabase.TKeys>> => {

    const keys: TDatabase.TKeys[] = []

    const records = await Linksdb.once('value')
    
    for (const [ key, value ] of Object.entries(records.val() as TDatabase.TEntries)) {
        keys.push({
            key: key,
            destination: value
        })
    }

    return keys
}
