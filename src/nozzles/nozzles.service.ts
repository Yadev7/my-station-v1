import { DispensersService } from '../dispensers/dispensers.service';
import { Dispenser } from '../dispensers/domain/dispenser';

import {
  // common
  Injectable,
  HttpStatus,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateNozzleDto } from './dto/create-nozzle.dto';
import { UpdateNozzleDto } from './dto/update-nozzle.dto';
import { NozzleRepository } from './infrastructure/persistence/nozzle.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Nozzle } from './domain/nozzle';

@Injectable()
export class NozzlesService {
  constructor(
    private readonly dispenserService: DispensersService,

    // Dependencies here
    private readonly nozzleRepository: NozzleRepository,
  ) {}

  async create(createNozzleDto: CreateNozzleDto) {
    // Do not remove comment below.
    // <creating-property />
    let DispenserId: Dispenser | null | undefined = undefined;

    if (createNozzleDto.DispenserId) {
      const DispenserIdObject = await this.dispenserService.findById(
        createNozzleDto.DispenserId.id,
      );
      if (!DispenserIdObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            DispenserId: 'notExists',
          },
        });
      }
      DispenserId = DispenserIdObject;
    } else if (createNozzleDto.DispenserId === null) {
      DispenserId = null;
    }

    return this.nozzleRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      DispenserId,

      percentageOil: createNozzleDto.percentageOil,

      index: createNozzleDto.index,

      name: createNozzleDto.name,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.nozzleRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Nozzle['id']) {
    return this.nozzleRepository.findById(id);
  }

  findByIds(ids: Nozzle['id'][]) {
    return this.nozzleRepository.findByIds(ids);
  }

  async update(
    id: Nozzle['id'],

    updateNozzleDto: UpdateNozzleDto,
  ) {
    // Do not remove comment below.
    // <updating-property />
    let DispenserId: Dispenser | null | undefined = undefined;

    if (updateNozzleDto.DispenserId) {
      const DispenserIdObject = await this.dispenserService.findById(
        updateNozzleDto.DispenserId.id,
      );
      if (!DispenserIdObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            DispenserId: 'notExists',
          },
        });
      }
      DispenserId = DispenserIdObject;
    } else if (updateNozzleDto.DispenserId === null) {
      DispenserId = null;
    }

    return this.nozzleRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      DispenserId,

      percentageOil: updateNozzleDto.percentageOil,

      index: updateNozzleDto.index,

      name: updateNozzleDto.name,
    });
  }

  remove(id: Nozzle['id']) {
    return this.nozzleRepository.remove(id);
  }
}
