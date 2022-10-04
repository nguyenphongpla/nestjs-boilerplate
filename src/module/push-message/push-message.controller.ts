import { Body } from '@nestjs/common';
import { Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PushMessageRequestDto } from './dto/req/push-message.dto';
import { FirestoreService } from './push-message.service';

@Controller('firebase')
@ApiTags('Firebase push notification')
export class TestController {
  constructor(private readonly firestoreService: FirestoreService) {}

  @Post('push-message')
  @ApiOperation({ summary: 'firebase push message' })
  @ApiResponse({
    status: HttpStatus.OK,
  })
  async pushMessage(@Body() request: PushMessageRequestDto): Promise<string> {
    const { userId, message } = request;
    await this.firestoreService.pushMessage(userId, message);

    return 'ok';
  }
}
