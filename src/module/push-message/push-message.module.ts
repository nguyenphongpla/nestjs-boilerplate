import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './push-message.controller';
import { User } from '../../entity/user.entity';
import { AppLoggerModule } from '../../config/logger/app-logger.module';
import { UserRoleModule } from '../user-role/user-role.module';
import { RoleModule } from '../role/role.module';
import { TransactionManagerModule } from '../../util/transaction-manager/transaction-manager.module';
import { FirestoreService } from './push-message.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RoleModule,
    UserRoleModule,
    TransactionManagerModule,
    AppLoggerModule,
  ],
  providers: [FirestoreService],
  controllers: [TestController],
  exports: [],
})
export class FirestoreModule {}
