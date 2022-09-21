import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { TokenProviderModule } from '../../security/token-provider/token-provider.module';
import { AppLoggerModule } from '../../config/logger/app-logger.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../../security/strategy/jwt.strategy';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [UserModule, RoleModule, TokenProviderModule, PassportModule, AppLoggerModule],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
