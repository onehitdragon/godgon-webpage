export {}

declare global{
    declare namespace NodeJS{
        interface ProcessEnv{
            BACKEND_HOST: string
        }
    }
}