import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { EntrepriseDto } from '../../../../../shared/dto/entreprise.dto';
import { ContactDto } from '../../../../../shared/dto/contact.dto';

@Entity({
  name: 'owner',
  schema: 'station-config',
})
export class OwnerEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
    type: String,
  })
  type?: string | null;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  entreprise?: EntrepriseDto | null;

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
