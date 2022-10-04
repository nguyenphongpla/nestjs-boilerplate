import { Injectable } from '@nestjs/common';
import { AppLogger } from '../../config/logger/app-logger.config';
import { getMessaging } from 'firebase-admin/messaging';
import { getFirestore } from 'firebase-admin/firestore';

@Injectable()
export class FirestoreService {
  constructor(private readonly log: AppLogger) {
    this.log.setContext(FirestoreService.name);
  }

  async addData(): Promise<void> {
    const docRef = getFirestore().collection('users').doc('huyphong');

    await docRef.set({
      first: 'phong',
      middle: 'huy1',
      last: 'nguyen',
      born: 1995,
    });
  }

  async pushMessage(userId: string, message: string): Promise<void> {
    try {
      const userSnapShot = await getFirestore().collection('users').doc(userId).get();

      if (!userSnapShot.exists) {
        return;
      }

      const { tokens } = userSnapShot.data();

      await getMessaging().send({
        token: tokens[0],
        notification: {
          title: 'Notification Title',
          body: 'Notification Body ',
        },
        data: {
          Nick: 'Mario',
          Room: 'PortugalVSDenmark',
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
