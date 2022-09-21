import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';
import { AppLogger } from '../config/logger.config';
import { UserFetchReqDto } from '../dto/request/user/user-fetch-req.dto';
import paginationUtil from '../util/pagination.util';
import { UserContext } from '../dto/type/user-context';
import { NotFoundException } from '../exception/not-found.exception';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository, private readonly log: AppLogger) {
    this.log.setContext(UserService.name);
  }

  async fetchAll(query: UserFetchReqDto): Promise<{ users: User[]; count: number }> {
    this.log.info(`Fetch all users by query #`, query);
    const { keyword } = query;
    const pageRequest = paginationUtil.getPageRequest(query);
    return this.repository.fetchUsers(keyword, pageRequest);
  }

  async getById(id: number): Promise<User> {
    this.log.info(`Get user by id #${id}`);
    const user = await this.repository.getById(id);
    if (!user) {
      throw new NotFoundException(`User with id #${id}`);
    }
    return user;
  }

  async getByEmail(email: string): Promise<User> {
    this.log.info(`Get user by email #${email}`);
    return this.repository.getByEmail(email);
  }

  async getCurrentUserProfile() {
    const currentUserId = UserContext.currentUserId;
    this.log.info(`Get current user profile by currentUserId #${currentUserId}`);
    return this.repository.getById(currentUserId);
  }
}
