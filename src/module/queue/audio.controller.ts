import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('audio')
export class AudioController {
  constructor(@InjectQueue('audio') private readonly audioQueue: Queue) {}

  @Post('transcode')
  async transcode() {
    await this.audioQueue.add(
      {
        file: 'audio.mp3',
      },
      {
        delay: 3000,
        // repeat: {
        //   every: 1000,
        // },
      },
    );
  }
}
