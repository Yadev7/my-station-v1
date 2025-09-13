import { DispenserEntity } from '../../../../../dispensers/infrastructure/persistence/relational/entities/dispenser.entity';

import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

// (Optional but recommended) Define an interface for the JSON object
export interface ICarbType {
  name: string; // e.g., 'SP95-E10'
  group: 'Essence' | 'Diesel' | 'LPG' | 'Ethanol';
  description?: string; // e.g., 'Unleaded 95 with up to 10% ethanol'
}

@Entity({
  name: 'nozzle',
  schema: 'station-config',
})
export class NozzleEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
    type: String,
  })
  name?: string | null;

  // Add the new jsonb column
  @Column({
    type: 'jsonb',
    nullable: true,
  })
  carbType?: ICarbType | null;

  @Column({
    nullable: true,
    type: Number,
  })
  index?: number | null;

  @Column({
    nullable: true,
    type: Number,
  })
  percentageOil?: number | null;

  @ManyToOne(() => DispenserEntity, { eager: true, nullable: true })
  DispenserId?: DispenserEntity | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
