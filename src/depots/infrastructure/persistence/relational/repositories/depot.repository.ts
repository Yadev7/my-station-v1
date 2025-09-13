import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { DepotEntity } from '../entities/depot.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Depot } from '../../../../domain/depot';
import { DepotRepository } from '../../depot.repository';
import { DepotMapper } from '../mappers/depot.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class DepotRelationalRepository implements DepotRepository {
  constructor(
    @InjectRepository(DepotEntity)
    private readonly depotRepository: Repository<DepotEntity>,
  ) {}

  async create(data: Depot): Promise<Depot> {
    const persistenceModel = DepotMapper.toPersistence(data);
    const newEntity = await this.depotRepository.save(
      this.depotRepository.create(persistenceModel),
    );
    return DepotMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Depot[]> {
    const entities = await this.depotRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => DepotMapper.toDomain(entity));
  }

  async findById(id: Depot['id']): Promise<NullableType<Depot>> {
    const entity = await this.depotRepository.findOne({
      where: { id },
    });

    return entity ? DepotMapper.toDomain(entity) : null;
  }

  async findByIds(ids: Depot['id'][]): Promise<Depot[]> {
    const entities = await this.depotRepository.find({
      where: { id: In(ids) },
    });

    return entities.map((entity) => DepotMapper.toDomain(entity));
  }

  async update(id: Depot['id'], payload: Partial<Depot>): Promise<Depot> {
    const entity = await this.depotRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.depotRepository.save(
      this.depotRepository.create(
        DepotMapper.toPersistence({
          ...DepotMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return DepotMapper.toDomain(updatedEntity);
  }

  async remove(id: Depot['id']): Promise<void> {
    await this.depotRepository.delete(id);
  }
}
