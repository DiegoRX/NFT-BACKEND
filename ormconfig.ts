import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export class OrmConfig {
  // Config TypeOrm
  getConfig() {
    const ormConfig: TypeOrmModuleOptions = {
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
        // ssl: true
        ssl: {
          rejectUnauthorized: false,
        },
      },
    };
    return ormConfig;
  }
}
export default new OrmConfig().getConfig();
