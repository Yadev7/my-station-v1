import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { OwnerEntity } from '../entities/owner.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Owner } from '../../../../domain/owner';
import { OwnerRepository } from '../../owner.repository';
import { OwnerMapper } from '../mappers/owner.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class OwnerRelationalRepository implements OwnerRepository {
  constructor(
    @InjectRepository(OwnerEntity)
    private readonly ownerRepository: Repository<OwnerEntity>,
  ) {}

  async create(data: Owner): Promise<Owner> {
    const persistenceModel = OwnerMapper.toPersistence(data);
    const newEntity = await this.ownerRepository.save(
      this.ownerRepository.create(persistenceModel),
    );
    return OwnerMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Owner[]> {
    const entities = await this.ownerRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => OwnerMapper.toDomain(entity));
  }

  async findById(id: Owner['id']): Promise<NullableType<Owner>> {
    const entity = await this.ownerRepository.findOne({
      where: { id },
    });

    return entity ? OwnerMapper.toDomain(entity) : null;
  }

  async findByIds(ids: Owner['id'][]): Promise<Owner[]> {
    const entities = await this.ownerRepository.find({
      where: { id: In(ids) },
    });

    return entities.map((entity) => OwnerMapper.toDomain(entity));
  }

  async update(id: Owner['id'], payload: Partial<Owner>): Promise<Owner> {
    const entity = await this.ownerRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.ownerRepository.save(
      this.ownerRepository.create(
        OwnerMapper.toPersistence({
          ...OwnerMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return OwnerMapper.toDomain(updatedEntity);
  }

  async remove(id: Owner['id']): Promise<void> {
    await this.ownerRepository.delete(id);
  }
}
