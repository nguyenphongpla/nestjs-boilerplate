import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginReqDto } from './dto/req/login-req.dto';
import { LoginResDto } from './dto/res/login-res.dto';
import { AuthService } from './auth.service';
import { RefreshTokenResDto } from './dto/res/refresh-token-res.dto';
import { RefreshTokenReqDto } from './dto/req/refresh-token-req.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: LoginResDto,
  })
  async login(@Body() loginReq: LoginReqDto): Promise<LoginResDto> {
    return this.authService.login(loginReq.email, loginReq.password);
  }

  @Post('refresh-token')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh token' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: RefreshTokenResDto,
  })
  async refreshToken(@Body() refreshTokenReq: RefreshTokenReqDto): Promise<RefreshTokenResDto> {
    return this.authService.refreshToken(refreshTokenReq.refreshToken);
  }
}
