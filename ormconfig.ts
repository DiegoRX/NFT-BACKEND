import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  migrations: ['src/database/migrations/*.ts'],
  entities: ['src/**/*.entity.ts'],
};
const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
