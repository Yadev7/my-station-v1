import { ProductEntity } from '../../../../../products/infrastructure/persistence/relational/entities/product.entity';

import { StationEntity } from '../../../../../stations/infrastructure/persistence/relational/entities/station.entity';

import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({
  name: 'tank',
  schema: 'station-config',
})
export class TankEntity extends EntityRelationalHelper {
  @OneToMany(() => ProductEntity, (childEntity) => childEntity.TankRef, {
    eager: true,
    nullable: true,
  })
  ProductId?: ProductEntity[] | null;

  @ManyToOne(() => StationEntity, { eager: true, nullable: true })
  StationId?: StationEntity | null;

  @Column({
    nullable: true,
    type: Number,
  })
  MaxCapacity?: number | null;

  @Column({
    nullable: true,
    type: Number,
  })
  MinCapacity?: number | null;

  @Column({
    nullable: true,
    type: Boolean,
  })
  DirectSale?: boolean | null;

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
  ContentType?: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
