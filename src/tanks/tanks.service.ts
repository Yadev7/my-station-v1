import { ProductsService } from '../products/products.service';
import { Product } from '../products/domain/product';

import { StationsService } from '../stations/stations.service';
import { Station } from '../stations/domain/station';

import {
  // common
  Injectable,
  HttpStatus,
  UnprocessableEntityException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { CreateTankDto } from './dto/create-tank.dto';
import { UpdateTankDto } from './dto/update-tank.dto';
import { TankRepository } from './infrastructure/persistence/tank.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Tank } from './domain/tank';

@Injectable()
export class TanksService {
  constructor(
    @Inject(forwardRef(() => ProductsService))
    private readonly productService: ProductsService,

    private readonly stationService: StationsService,

    // Dependencies here
    private readonly tankRepository: TankRepository,
  ) {}

  async create(createTankDto: CreateTankDto) {
    // Do not remove comment below.
    // <creating-property />
    let ProductId: Product[] | null | undefined = undefined;

    if (createTankDto.ProductId) {
      const ProductIdObjects = await this.productService.findByIds(
        createTankDto.ProductId.map((entity) => entity.id),
      );
      if (ProductIdObjects.length !== createTankDto.ProductId.length) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            ProductId: 'notExists',
          },
        });
      }
      ProductId = ProductIdObjects;
    } else if (createTankDto.ProductId === null) {
      ProductId = null;
    }

    let StationId: Station | null | undefined = undefined;

    if (createTankDto.StationId) {
      const StationIdObject = await this.stationService.findById(
        createTankDto.StationId.id,
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
    } else if (createTankDto.StationId === null) {
      StationId = null;
    }

    return this.tankRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      ProductId,

      StationId,

      MaxCapacity: createTankDto.MaxCapacity,

      MinCapacity: createTankDto.MinCapacity,

      DirectSale: createTankDto.DirectSale,

      ContentType: createTankDto.ContentType,

      name: createTankDto.name,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.tankRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Tank['id']) {
    return this.tankRepository.findById(id);
  }

  findByIds(ids: Tank['id'][]) {
    return this.tankRepository.findByIds(ids);
  }

  async update(
    id: Tank['id'],

    updateTankDto: UpdateTankDto,
  ) {
    // Do not remove comment below.
    // <updating-property />
    let ProductId: Product[] | null | undefined = undefined;

    if (updateTankDto.ProductId) {
      const ProductIdObjects = await this.productService.findByIds(
        updateTankDto.ProductId.map((entity) => entity.id),
      );
      if (ProductIdObjects.length !== updateTankDto.ProductId.length) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            ProductId: 'notExists',
          },
        });
      }
      ProductId = ProductIdObjects;
    } else if (updateTankDto.ProductId === null) {
      ProductId = null;
    }

    let StationId: Station | null | undefined = undefined;

    if (updateTankDto.StationId) {
      const StationIdObject = await this.stationService.findById(
        updateTankDto.StationId.id,
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
    } else if (updateTankDto.StationId === null) {
      StationId = null;
    }

    return this.tankRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      ProductId,

      StationId,

      MaxCapacity: updateTankDto.MaxCapacity,

      MinCapacity: updateTankDto.MinCapacity,

      DirectSale: updateTankDto.DirectSale,

      ContentType: updateTankDto.ContentType,

      name: updateTankDto.name,
    });
  }

  remove(id: Tank['id']) {
    return this.tankRepository.remove(id);
  }
}
