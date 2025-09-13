import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { AddressDto } from 'src/shared/dto/address.dto';
import { ContactDto } from 'src/shared/dto/contact.dto';

@Entity({
  name: 'depot',
  schema: 'station-config',
})
export class DepotEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    type: String,
  })
  name: string;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  adresse?: AddressDto | null;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  contact?: ContactDto | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
