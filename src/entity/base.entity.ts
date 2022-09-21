import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntityModel extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ nullable: false })
  createdBy: number;

  @Column({ nullable: false })
  updatedBy: number;

  @CreateDateColumn({
    default: () => 'now()',
  })
  createdAt: Date;

  @UpdateDateColumn({
    onUpdate: 'now()',
    default: () => 'now()',
  })
  updatedAt: Date;
}
