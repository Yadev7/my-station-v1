import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';


@Entity({
  name: 'category',
  schema: 'station-config',
})

export class CategoryEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @ManyToOne(() => CategoryEntity, (parent) => parent.children, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  parent: CategoryEntity | null;

  @OneToMany(() => CategoryEntity, (child) => child.parent)
  children?: CategoryEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
