declare module 'firebase/database' {
    
    export namespace TDatabase {

        interface TKeys {
            key: string,
            destination: string
        }
    
        interface TEntries {
            [key: string]: string
        }

        interface TChanged {
            key: string,
            val: () => string
        }

    }
}
