import { Injectable } from '@nestjs/common';
import { AppLogger } from '../config/logger.config';
import { RoleRepository } from '../repository/role.repository';
import { Role } from '../entity/role.entity';

@Injectable()
export class RoleService {
  constructor(private readonly repository: RoleRepository, private readonly log: AppLogger) {
    this.log.setContext(RoleService.name);
  }

  async fetchByUserId(userId: number): Promise<Role[]> {
    this.log.info(`Fetch roles by userId #${userId}`);
    return await this.repository.fetchByUserId(userId);
  }
}
