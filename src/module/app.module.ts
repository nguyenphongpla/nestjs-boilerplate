import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from '../database/data-source';
import { AuthModule } from './auth/auth.module';
import { AppLoggerModule } from '../config/logger/app-logger.module';
import { FirestoreModule } from './push-message/push-message.module';
import { CoreFirebaseModule } from 'src/core/firebase/firebase.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    UserModule,
    AppLoggerModule,
    CoreFirebaseModule,
    FirestoreModule,
  ],
})
export class AppModule {}
