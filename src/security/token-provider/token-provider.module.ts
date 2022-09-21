import { Module } from '@nestjs/common';
import { TokenProvider } from './token-provider';
import { JwtService } from '@nestjs/jwt';
import { AppLoggerModule } from '../../config/logger/app-logger.module';

@Module({
  imports: [AppLoggerModule],
  providers: [TokenProvider, JwtService],
  exports: [TokenProvider],
})
export class TokenProviderModule {}
