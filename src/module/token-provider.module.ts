import { Module } from '@nestjs/common';
import { TokenProvider } from '../security/token-provider';
import { JwtService } from '@nestjs/jwt';
import { AppLoggerModule } from './logger.module';

@Module({
  imports: [AppLoggerModule],
  providers: [TokenProvider, JwtService],
  exports: [TokenProvider],
})
export class TokenProviderModule {}
