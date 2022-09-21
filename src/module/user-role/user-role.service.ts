import { Injectable } from '@nestjs/common';
import { UserRoleRepository } from './user-role.repository';
import { AppLogger } from '../../config/logger/app-logger.config';
import { UserRole } from '../../entity/user-role.entity';
import { QueryRunner } from 'typeorm';

@Injectable()
export class UserRoleService {
  constructor(private readonly repository: UserRoleRepository, private readonly log: AppLogger) {
    this.log.setContext(UserRoleService.name);
  }

  async save(userRole: UserRole, transaction?: QueryRunner): Promise<UserRole> {
    this.log.info('Save userRole with data #', userRole);
    return this.repository.saveEntity(userRole, transaction);
  }
}
