// import { DepotProductsService } from '../depot-products/depot-products.service';
// import { DepotProduct } from '../depot-products/domain/depot-product';

import {
  // common
  Injectable,
  // HttpStatus,
  // UnprocessableEntityException,
  // Inject,
  // forwardRef,
} from '@nestjs/common';
import { CreateDepotDto } from './dto/create-depot.dto';
import { UpdateDepotDto } from './dto/update-depot.dto';
import { DepotRepository } from './infrastructure/persistence/depot.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Depot } from './domain/depot';

@Injectable()
export class DepotsService {
  constructor(private readonly depotRepository: DepotRepository) {}

  async create(createDepotDto: CreateDepotDto) {
    // Do not remove comment below.
    // <creating-property />

    // const DepotProductRefObject = await this.depotProductService.findById(
    //   createDepotDto.DepotProductRef.id,
    // );
    // if (!DepotProductRefObject) {
    //   throw new UnprocessableEntityException({
    //     status: HttpStatus.UNPROCESSABLE_ENTITY,
    //     errors: {
    //       DepotProductRef: 'notExists',
    //     },
    //   });
    // }
    // const DepotProductRef = DepotProductRefObject;

    return this.depotRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      contact: createDepotDto.contact,

      adresse: createDepotDto.adresse,

      // DepotProductRef,

      name: createDepotDto.name,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.depotRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Depot['id']) {
    return this.depotRepository.findById(id);
  }

  findByIds(ids: Depot['id'][]) {
    return this.depotRepository.findByIds(ids);
  }

  async update(
    id: Depot['id'],

    updateDepotDto: UpdateDepotDto,
  ) {
    // Do not remove comment below.
    // <updating-property />

    // let DepotProductRef: DepotProduct | undefined = undefined;

    // if (updateDepotDto.DepotProductRef) {
    //   const DepotProductRefObject = await this.depotProductService.findById(
    //     updateDepotDto.DepotProductRef.id,
    //   );
    //   if (!DepotProductRefObject) {
    //     throw new UnprocessableEntityException({
    //       status: HttpStatus.UNPROCESSABLE_ENTITY,
    //       errors: {
    //         DepotProductRef: 'notExists',
    //       },
    //     });
    //   }
    //   DepotProductRef = DepotProductRefObject;
    // }

    return this.depotRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      contact: updateDepotDto.contact,

      adresse: updateDepotDto.adresse,

      // DepotProductRef,

      name: updateDepotDto.name,
    });
  }

  remove(id: Depot['id']) {
    return this.depotRepository.remove(id);
  }
}
