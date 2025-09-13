import { StationEntity } from '../../../../../stations/infrastructure/persistence/relational/entities/station.entity';

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
  name: 'islet',
  schema: 'station-config',
})
export class IsletEntity extends EntityRelationalHelper {
  @ManyToOne(() => StationEntity, { eager: true, nullable: true })
  StationId?: StationEntity | null;

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
  Description?: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
