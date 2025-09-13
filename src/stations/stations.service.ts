import { OwnersService } from '../owners/owners.service';
import { Owner } from '../owners/domain/owner';

import {
  // common
  Injectable,
  HttpStatus,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { StationRepository } from './infrastructure/persistence/station.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Station } from './domain/station';

@Injectable()
export class StationsService {
  constructor(
    private readonly ownerService: OwnersService,

    // Dependencies here
    private readonly stationRepository: StationRepository,
  ) {}

  async create(createStationDto: CreateStationDto) {
    // Do not remove comment below.
    // <creating-property />

    let OwnerId: Owner | null | undefined = undefined;

    if (createStationDto.OwnerId) {
      const OwnerIdObject = await this.ownerService.findById(
        createStationDto.OwnerId.id,
      );
      if (!OwnerIdObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            OwnerId: 'notExists',
          },
        });
      }
      OwnerId = OwnerIdObject;
    } else if (createStationDto.OwnerId === null) {
      OwnerId = null;
    }

    return this.stationRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      adresse: createStationDto.adresse,

      contact: createStationDto.contact,

      DisplayHeaderFooter: createStationDto.DisplayHeaderFooter,

      SignatureImg: createStationDto.SignatureImg,

      StampsImg: createStationDto.StampsImg,

      Logo: createStationDto.Logo,

      TVAShop: createStationDto.TVAShop,

      TVACoffeeRest: createStationDto.TVACoffeeRest,

      TVAService: createStationDto.TVAService,

      TVALubrifion: createStationDto.TVALubrifion,

      TVACarb: createStationDto.TVACarb,

      URLSITE: createStationDto.URLSITE,

      CNSS: createStationDto.CNSS,

      IF: createStationDto.IF,

      RC: createStationDto.RC,

      ICE: createStationDto.ICE,

      OwnerId,

      name: createStationDto.name,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.stationRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Station['id']) {
    return this.stationRepository.findById(id);
  }

  findByIds(ids: Station['id'][]) {
    return this.stationRepository.findByIds(ids);
  }

  async update(
    id: Station['id'],

    updateStationDto: UpdateStationDto,
  ) {
    // Do not remove comment below.
    // <updating-property />

    let OwnerId: Owner | null | undefined = undefined;

    if (updateStationDto.OwnerId) {
      const OwnerIdObject = await this.ownerService.findById(
        updateStationDto.OwnerId.id,
      );
      if (!OwnerIdObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            OwnerId: 'notExists',
          },
        });
      }
      OwnerId = OwnerIdObject;
    } else if (updateStationDto.OwnerId === null) {
      OwnerId = null;
    }

    return this.stationRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      adresse: updateStationDto.adresse,

      contact: updateStationDto.contact,

      DisplayHeaderFooter: updateStationDto.DisplayHeaderFooter,

      SignatureImg: updateStationDto.SignatureImg,

      StampsImg: updateStationDto.StampsImg,

      Logo: updateStationDto.Logo,

      TVAShop: updateStationDto.TVAShop,

      TVACoffeeRest: updateStationDto.TVACoffeeRest,

      TVAService: updateStationDto.TVAService,

      TVALubrifion: updateStationDto.TVALubrifion,

      TVACarb: updateStationDto.TVACarb,

      URLSITE: updateStationDto.URLSITE,

      CNSS: updateStationDto.CNSS,

      IF: updateStationDto.IF,

      RC: updateStationDto.RC,

      ICE: updateStationDto.ICE,

      OwnerId,

      name: updateStationDto.name,
    });
  }

  remove(id: Station['id']) {
    return this.stationRepository.remove(id);
  }
}
