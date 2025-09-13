import { IsletsService } from '../islets/islets.service';
import { Islet } from '../islets/domain/islet';

import {
  // common
  Injectable,
  HttpStatus,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateDispenserDto } from './dto/create-dispenser.dto';
import { UpdateDispenserDto } from './dto/update-dispenser.dto';
import { DispenserRepository } from './infrastructure/persistence/dispenser.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Dispenser } from './domain/dispenser';

@Injectable()
export class DispensersService {
  constructor(
    private readonly isletService: IsletsService,

    // Dependencies here
    private readonly dispenserRepository: DispenserRepository,
  ) {}

  async create(createDispenserDto: CreateDispenserDto) {
    // Do not remove comment below.
    // <creating-property />
    let IsletId: Islet | null | undefined = undefined;

    if (createDispenserDto.IsletId) {
      const IsletIdObject = await this.isletService.findById(
        createDispenserDto.IsletId.id,
      );
      if (!IsletIdObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            IsletId: 'notExists',
          },
        });
      }
      IsletId = IsletIdObject;
    } else if (createDispenserDto.IsletId === null) {
      IsletId = null;
    }

    return this.dispenserRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      IsletId,

      brand: createDispenserDto.brand,

      name: createDispenserDto.name,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.dispenserRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Dispenser['id']) {
    return this.dispenserRepository.findById(id);
  }

  findByIds(ids: Dispenser['id'][]) {
    return this.dispenserRepository.findByIds(ids);
  }

  async update(
    id: Dispenser['id'],

    updateDispenserDto: UpdateDispenserDto,
  ) {
    // Do not remove comment below.
    // <updating-property />
    let IsletId: Islet | null | undefined = undefined;

    if (updateDispenserDto.IsletId) {
      const IsletIdObject = await this.isletService.findById(
        updateDispenserDto.IsletId.id,
      );
      if (!IsletIdObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            IsletId: 'notExists',
          },
        });
      }
      IsletId = IsletIdObject;
    } else if (updateDispenserDto.IsletId === null) {
      IsletId = null;
    }

    return this.dispenserRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      IsletId,

      brand: updateDispenserDto.brand,

      Brand: updateDispenserDto.Brand,

      name: updateDispenserDto.name,
    });
  }

  remove(id: Dispenser['id']) {
    return this.dispenserRepository.remove(id);
  }
}
