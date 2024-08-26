declare namespace NodeJS {
    interface ProcessEnv {
        username: string;
        password: string;
        host: string;
        port: string;
        database: string;
        sslmode: string;
    }
}