import { IsletEntity } from '../../../../../islets/infrastructure/persistence/relational/entities/islet.entity';

import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({
  name: 'dispenser',
  schema: 'station-config',
})
export class DispenserEntity extends EntityRelationalHelper {
  @ManyToOne(() => IsletEntity, { eager: true, nullable: true })
  IsletId?: IsletEntity | null;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
    type: String,
  })
  name?: string | null;

  @Column({
    nullable: true,
    type: String,
  })
  brand?: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
