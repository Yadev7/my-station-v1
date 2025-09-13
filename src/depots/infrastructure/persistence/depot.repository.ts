import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Depot } from '../../domain/depot';

export abstract class DepotRepository {
  abstract create(
    data: Omit<Depot, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Depot>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Depot[]>;

  abstract findById(id: Depot['id']): Promise<NullableType<Depot>>;

  abstract findByIds(ids: Depot['id'][]): Promise<Depot[]>;

  abstract update(
    id: Depot['id'],
    payload: DeepPartial<Depot>,
  ): Promise<Depot | null>;

  abstract remove(id: Depot['id']): Promise<void>;
}
