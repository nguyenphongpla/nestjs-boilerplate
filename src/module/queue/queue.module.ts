import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { QueueProducerService } from './audio.producer';
import { AudioProcessor } from './audio.processor';
import { AudioController } from './audio.controller';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
    }),
  ],
  providers: [QueueProducerService, AudioProcessor],
  controllers: [AudioController],
})
export class QueueModule {}
