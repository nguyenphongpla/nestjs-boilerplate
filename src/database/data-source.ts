import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export const ormconfig = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'r00t',
  database: process.env.DB_NAME || 'nestjs',
  entities: [__dirname + '/../entity/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../database/migration/*{.ts,.js}'],
  timezone: 'Z',
  dateStrings: true,
  charset: 'utf8mb4',
  synchronize: false,
  logging: process.env.NODE_ENV === 'dev' ? ['query', 'error'] : false,
} as TypeOrmModuleOptions;

export const dataSource = new DataSource(ormconfig as DataSourceOptions);
