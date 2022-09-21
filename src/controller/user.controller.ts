import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { plainToClass, plainToInstance } from 'class-transformer';
import { UserResDto } from '../dto/response/user/user-res.dto';
import { RolesGuard } from '../security/guard/role.guard';
import { Roles } from '../security/decorator/role.decorator';
import { RoleType } from '../enum/role-type';
import { JwtGuard } from '../security/guard/jwt.guard';
import { UserFetchReqDto } from '../dto/request/user/user-fetch-req.dto';
import paginationUtil from '../util/pagination.util';
import { PaginationResDto } from '../dto/response/pagination-res.dto';

@Controller('users')
@ApiTags('User')
@UseGuards(JwtGuard, RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  @Roles(RoleType.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Fetch all users' })
  @ApiResponse({
    status: 200,
    type: PaginationResDto,
  })
  async fetchAllUsers(@Query() req: UserFetchReqDto): Promise<PaginationResDto> {
    const query = new UserFetchReqDto(req);
    const { users, count } = await this.userService.fetchAll(query);
    return paginationUtil.getPageResponse(
      plainToInstance(UserResDto, users, {
        excludeExtraneousValues: true,
      }),
      query,
      count,
    );
  }

  @Get('me')
  @Roles(RoleType.ADMIN, RoleType.USER)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({
    status: 200,
    type: UserResDto,
  })
  async getCurrentUserProfile(): Promise<UserResDto> {
    const user = await this.userService.getCurrentUserProfile();

    return plainToClass(UserResDto, user, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':id')
  @Roles(RoleType.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({
    status: 200,
    type: UserResDto,
  })
  async getUserById(@Param('id') id: number): Promise<UserResDto> {
    const user = await this.userService.getById(id);

    return plainToClass(UserResDto, user, {
      excludeExtraneousValues: true,
    });
  }
}
