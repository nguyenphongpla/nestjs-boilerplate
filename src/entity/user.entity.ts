import { Column, Entity, Unique } from 'typeorm';
import { BaseEntityModel } from './base.entity';
import { RoleType } from '../enum/role-type';

@Entity('users')
export class User extends BaseEntityModel {
  @Column({ nullable: false })
  @Unique(['email'])
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  name: string;

  @Column({
    default: true,
  })
  activated: boolean;
}
