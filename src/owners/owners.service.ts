import {
  // common
  Injectable,
} from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { OwnerRepository } from './infrastructure/persistence/owner.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Owner } from './domain/owner';

@Injectable()
export class OwnersService {
  constructor(
    // Dependencies here
    private readonly ownerRepository: OwnerRepository,
  ) {}

  async create(createOwnerDto: CreateOwnerDto) {
    // Do not remove comment below.
    // <creating-property />

    return this.ownerRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      contact: createOwnerDto.contact,

      entreprise: createOwnerDto.entreprise,

      type: createOwnerDto.type,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.ownerRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Owner['id']) {
    return this.ownerRepository.findById(id);
  }

  findByIds(ids: Owner['id'][]) {
    return this.ownerRepository.findByIds(ids);
  }

  async update(
    id: Owner['id'],

    updateOwnerDto: UpdateOwnerDto,
  ) {
    // Do not remove comment below.
    // <updating-property />

    return this.ownerRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      contact: updateOwnerDto.contact,

      entreprise: updateOwnerDto.entreprise,

      type: updateOwnerDto.type,
    });
  }

  remove(id: Owner['id']) {
    return this.ownerRepository.remove(id);
  }
}
