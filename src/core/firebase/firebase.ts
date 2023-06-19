import firebase from "firebase-admin"
import { ENV } from '../../config/config.js'

const serviceAccount = JSON.parse(ENV.FIREBASE_AUTH) as object

/* Initialize Firebase SDK */
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: ENV.FIREBASE_API
})

export const firedb = firebase.database().ref('/')
