import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from '../database/data-source';
import { AuthModule } from './auth/auth.module';
import { AppLoggerModule } from '../config/logger/app-logger.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), AuthModule, UserModule, AppLoggerModule],
})
export class AppModule {}
