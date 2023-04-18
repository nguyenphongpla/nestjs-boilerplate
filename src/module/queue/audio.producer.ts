import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class QueueProducerService {
  constructor(@InjectQueue('audio') private audioQueue: Queue) {}

  async addJob() {
    const job = await this.audioQueue.add({
      foo: 'bar',
    });
    console.log(
      '🚀 ~ file: queue-producer.service.ts:13 ~ QueueProducerService ~ addJob ~ job:',
      job,
    );
  }
}
