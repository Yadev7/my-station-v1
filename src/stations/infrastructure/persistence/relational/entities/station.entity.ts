import { OwnerEntity } from '../../../../../owners/infrastructure/persistence/relational/entities/owner.entity';
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { ContactDto } from 'src/shared/dto/contact.dto';
import { AddressDto } from 'src/shared/dto/address.dto';
// import { ContactDto } from 'src/shared/dto/contact.dto';
// import { AddressDto } from 'src/shared/dto/address.dto';

@Entity({
  name: 'station',
  schema: 'station-config',
})
export class StationEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, type: String })
  name?: string | null;

  @Column({ nullable: true, type: String })
  ICE?: string | null;

  @Column({ nullable: true, type: String })
  RC?: string | null;

  // For numbers with decimals, 'float' or 'decimal' is more explicit
  @Column({ type: 'float', nullable: true })
  TVACarb?: number | null;

  @Column({ type: 'float', nullable: true })
  TVALubrifion?: number | null;

  @Column({ type: 'float', nullable: true })
  TVAService?: number | null;

  @Column({ type: 'float', nullable: true })
  TVACoffeeRest?: number | null;

  @Column({ type: 'float', nullable: true })
  TVAShop?: number | null;

  @Column({ nullable: true, type: Boolean })
  DisplayHeaderFooter?: boolean | null;

  @Column({ nullable: true, type: String })
  Logo?: string | null;

  @Column({ nullable: true, type: String })
  IF?: string | null;

  // --- NEW PROPERTY ADDED ---
  // Using 'jsonb' is a consistent and simple way to store an array of strings
  @Column({
    type: 'jsonb',
    nullable: true,
    default: [], // Good practice to default arrays to an empty array
  })
  StationImg?: string[] | null;

  @Column({ nullable: true, type: String })
  StampsImg?: string | null;

  @Column({ nullable: true, type: String })
  SignatureImg?: string | null;

  @Column({ nullable: true, type: String })
  CNSS?: string | null;

  @Column({ nullable: true, type: String })
  URLSITE?: string | null;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  adresse?: AddressDto | null;

  @Column({
    nullable: true,
    type: 'jsonb',
  })
  contact?: ContactDto | null;

  // It's a common convention to name the relation property after the entity it holds
  @ManyToOne(() => OwnerEntity, { eager: true, nullable: true })
  OwnerId?: OwnerEntity | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
