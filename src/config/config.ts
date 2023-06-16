export const PORT = 8080

export const ENV = {
    /* Node Environment */
    NODE_ENV: process.env.NODE_ENV || 'production',
    /* Express app Port */
    PORT: process.env.PORT,
    /* Npm Package Version */
    NPM_VERSION: process.env.npm_package_version,
    /* Redis API Key */
    REDIS_KEY: process.env.REDIS_KEY,
    /* Redis API */
    REDIS_API: process.env.REDIS_API
}
