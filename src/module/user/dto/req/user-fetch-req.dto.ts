import { PaginationReqDto } from '../../../../share/dto/request/pagination-req.dto';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserFetchReqDto extends PaginationReqDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  keyword: string;
}
