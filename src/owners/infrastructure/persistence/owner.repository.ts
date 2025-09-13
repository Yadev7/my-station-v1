import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Owner } from '../../domain/owner';

export abstract class OwnerRepository {
  abstract create(
    data: Omit<Owner, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Owner>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Owner[]>;

  abstract findById(id: Owner['id']): Promise<NullableType<Owner>>;

  abstract findByIds(ids: Owner['id'][]): Promise<Owner[]>;

  abstract update(
    id: Owner['id'],
    payload: DeepPartial<Owner>,
  ): Promise<Owner | null>;

  abstract remove(id: Owner['id']): Promise<void>;
}
