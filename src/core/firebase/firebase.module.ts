import { Module } from '@nestjs/common';

import { Injectable } from '@nestjs/common';
import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import serviceAccount from 'src/third-party/firebase/service-account-key.json';

@Injectable()
export class CoreFirebaseService {
  constructor() {
    initializeApp({
      credential: cert(serviceAccount as ServiceAccount),
    });
  }
}

@Module({
  providers: [CoreFirebaseService],
})
export class CoreFirebaseModule {}
