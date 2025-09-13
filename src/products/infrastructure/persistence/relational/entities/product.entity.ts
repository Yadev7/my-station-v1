import { TankEntity } from '../../../../../tanks/infrastructure/persistence/relational/entities/tank.entity';

import { CategoryEntity } from '../../../../../categories/infrastructure/persistence/relational/entities/category.entity';

import { StationEntity } from '../../../../../stations/infrastructure/persistence/relational/entities/station.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

/**
 * Defines the structure for a single price history record.
 */
export interface PriceHistoryEntry {
  salePrice: number;
  boughtPrice: number; // Corrected from "BoughthPrice"
  applyDate: Date;
  finalDate: Date | null; // Use null if the price is still active
}

@Entity({
  name: 'product',
  schema: 'station-config',
})
export class ProductEntity extends EntityRelationalHelper {
  @ManyToOne(() => TankEntity, (parentEntity) => parentEntity.ProductId, {
    eager: false,
    nullable: false,
  })
  TankRef: TankEntity;

  @ManyToOne(() => CategoryEntity, { eager: true, nullable: true })
  ProductCat?: CategoryEntity | null;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: String, nullable: true })
  name?: string | null;

  @Column({ type: String, nullable: true })
  unit?: string | null;

  @Column({ type: 'int', nullable: true })
  qtyTotal?: number | null;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  currentPrice?: number | null;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  purchasingPrice?: number | null;

  @Column({ type: Date, nullable: true })
  dateAppliedPrice?: Date | null; // Corrected from "DateApplyedPrice"

  /**
   * Stores an array of price history objects.
   * Using 'jsonb' is recommended for PostgreSQL for better indexing and performance.
   * Use 'json' for MySQL/MariaDB.
   */
  @Column({
    type: 'jsonb',
    array: false,
    default: () => "'[]'", // Default to an empty array
    nullable: false,
  })
  priceHistory: PriceHistoryEntry[];

  @Column({ type: String, nullable: true })
  description?: string | null;

  @ManyToOne(() => StationEntity, { eager: true, nullable: true })
  station?: StationEntity | null; // Renamed to camelCase

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
