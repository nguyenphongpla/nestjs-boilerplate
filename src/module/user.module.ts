import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';
import { AppLoggerModule } from './logger.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AppLoggerModule],
  providers: [UserService, UserRepository],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
