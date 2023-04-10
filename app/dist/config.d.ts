declare const _default: (() => {
    database: {
        name: string;
        port: string;
    };
    postgresUrl: string;
    apiKey: string;
    jwtSecret: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    database: {
        name: string;
        port: string;
    };
    postgresUrl: string;
    apiKey: string;
    jwtSecret: string;
}>;
export default _default;
