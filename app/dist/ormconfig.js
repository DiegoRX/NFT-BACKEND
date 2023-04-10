"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmConfig = void 0;
class OrmConfig {
    getConfig() {
        const ormConfig = {
            type: 'postgres',
            host: process.env.POSTGRESQL_HOST,
            port: Number(process.env.POSTGRESQL_PORT) || 5432,
            username: process.env.POSTGRESQL_USER || 'postgres',
            password: process.env.POSTGRESQL_PASSWORD || '123456789',
            database: process.env.POSTGRESQL_DB || 'potsgres',
            entities: ['dist/**/*.entity{.js,.ts}'],
            synchronize: false,
            migrationsRun: true,
            logging: false,
            logger: 'file',
            migrations: ['dist/database/migrations/**/*{.js, .ts}'],
            ssl: true,
            extra: {
                ssl: {
                    rejectUnauthorized: false,
                },
            },
        };
        return ormConfig;
    }
}
exports.OrmConfig = OrmConfig;
exports.default = new OrmConfig().getConfig();
//# sourceMappingURL=ormconfig.js.map