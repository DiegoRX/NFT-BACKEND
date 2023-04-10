export declare class OrmConfig {
    getConfig(): {
        retryAttempts?: number;
        retryDelay?: number;
        toRetry?: (err: any) => boolean;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
        verboseRetryLog?: boolean;
    } & Partial<import("typeorm/driver/postgres/PostgresConnectionOptions").PostgresConnectionOptions>;
}
declare const _default: {
    retryAttempts?: number;
    retryDelay?: number;
    toRetry?: (err: any) => boolean;
    autoLoadEntities?: boolean;
    keepConnectionAlive?: boolean;
    verboseRetryLog?: boolean;
} & Partial<import("typeorm/driver/postgres/PostgresConnectionOptions").PostgresConnectionOptions>;
export default _default;
