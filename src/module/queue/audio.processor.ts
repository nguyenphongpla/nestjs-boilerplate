import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Logger, Scope } from '@nestjs/common';
import { Job } from 'bull';
import { delay } from '../../util/delay';

@Processor({
  name: 'audio',
  scope: Scope.DEFAULT,
})
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);
  count: 1;

  @Process({
    concurrency: 5,
  })
  async handleTranscode(job: Job) {
    this.logger.debug('Start transcoding...: ', job.id);

    console.log(await job.finished());

    this.logger.debug('Transcoding completed');
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${JSON.stringify(job.data)}...`,
    );
  }
}
