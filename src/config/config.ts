export const PORT = 8080

export const ENV = {
    /* Node Environment */
    NODE_ENV: process.env.NODE_ENV || 'production',
    /* Express app Port */
    PORT: process.env.PORT,
    /* Npm Package Version */
    NPM_VERSION: process.env.npm_package_version,
    /* Firebase Authentication (firebase-credentials.json) */
    FIREBASE_AUTH: process.env.FIREBASE_AUTH,
    /* Firebase Database URI */
    FIREBASE_API: process.env.FIREBASE_API
}
