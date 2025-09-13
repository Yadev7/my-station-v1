import { StationsService } from '../stations/stations.service';
import { Station } from '../stations/domain/station';

import {
  // common
  Injectable,
  HttpStatus,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateIsletDto } from './dto/create-islet.dto';
import { UpdateIsletDto } from './dto/update-islet.dto';
import { IsletRepository } from './infrastructure/persistence/islet.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Islet } from './domain/islet';

@Injectable()
export class IsletsService {
  constructor(
    private readonly stationService: StationsService,

    // Dependencies here
    private readonly isletRepository: IsletRepository,
  ) {}

  async create(createIsletDto: CreateIsletDto) {
    // Do not remove comment below.
    // <creating-property />
    let StationId: Station | null | undefined = undefined;

    if (createIsletDto.StationId) {
      const StationIdObject = await this.stationService.findById(
        createIsletDto.StationId.id,
      );
      if (!StationIdObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            StationId: 'notExists',
          },
        });
      }
      StationId = StationIdObject;
    } else if (createIsletDto.StationId === null) {
      StationId = null;
    }

    return this.isletRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      StationId,

      Description: createIsletDto.Description,

      name: createIsletDto.name,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.isletRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Islet['id']) {
    return this.isletRepository.findById(id);
  }

  findByIds(ids: Islet['id'][]) {
    return this.isletRepository.findByIds(ids);
  }

  async update(
    id: Islet['id'],

    updateIsletDto: UpdateIsletDto,
  ) {
    // Do not remove comment below.
    // <updating-property />
    let StationId: Station | null | undefined = undefined;

    if (updateIsletDto.StationId) {
      const StationIdObject = await this.stationService.findById(
        updateIsletDto.StationId.id,
      );
      if (!StationIdObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            StationId: 'notExists',
          },
        });
      }
      StationId = StationIdObject;
    } else if (updateIsletDto.StationId === null) {
      StationId = null;
    }

    return this.isletRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      StationId,

      Description: updateIsletDto.Description,

      name: updateIsletDto.name,
    });
  }

  remove(id: Islet['id']) {
    return this.isletRepository.remove(id);
  }
}
