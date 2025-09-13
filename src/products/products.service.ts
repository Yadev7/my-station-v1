import { TanksService } from '../tanks/tanks.service';
import { Tank } from '../tanks/domain/tank';

import { DepotProductsService } from '../depot-products/depot-products.service';
import { DepotProduct } from '../depot-products/domain/depot-product';

import { CategoriesService } from '../categories/categories.service';
import { Category } from '../categories/domain/category';

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
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './infrastructure/persistence/product.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Product } from './domain/product';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(forwardRef(() => TanksService))
    private readonly tankService: TanksService,

    @Inject(forwardRef(() => DepotProductsService))
    private readonly depotProductService: DepotProductsService,

    private readonly categoryService: CategoriesService,

    private readonly stationService: StationsService,

    // Dependencies here
    private readonly productRepository: ProductRepository,
  ) {}

  async create(createProductDto: CreateProductDto) {
    // Do not remove comment below.
    // <creating-property />
    const TankRefObject = await this.tankService.findById(
      createProductDto.TankRef.id,
    );
    if (!TankRefObject) {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: {
          TankRef: 'notExists',
        },
      });
    }
    const TankRef = TankRefObject;

    const DepotProductRefObject = await this.depotProductService.findById(
      createProductDto.DepotProductRef.id,
    );
    if (!DepotProductRefObject) {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: {
          DepotProductRef: 'notExists',
        },
      });
    }
    const DepotProductRef = DepotProductRefObject;

    let ProductCat: Category | null | undefined = undefined;

    if (createProductDto.ProductCat) {
      const ProductCatObject = await this.categoryService.findById(
        createProductDto.ProductCat.id,
      );
      if (!ProductCatObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            ProductCat: 'notExists',
          },
        });
      }
      ProductCat = ProductCatObject;
    } else if (createProductDto.ProductCat === null) {
      ProductCat = null;
    }

    let StationId: Station | null | undefined = undefined;

    if (createProductDto.StationId) {
      const StationIdObject = await this.stationService.findById(
        createProductDto.StationId.id,
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
    } else if (createProductDto.StationId === null) {
      StationId = null;
    }

    return this.productRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      TankRef,

      DepotProductRef,

      ProductCat,

      StationId,

      Description: createProductDto.Description,

      // ProductCat: createProductDto.ProductCat,

      DateApplyedPrice: createProductDto.DateApplyedPrice,

      PurchasingPrice: createProductDto.PurchasingPrice,

      CurrentPrice: createProductDto.CurrentPrice,

      QtyTotal: createProductDto.QtyTotal,

      Unit: createProductDto.Unit,

      name: createProductDto.name,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.productRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Product['id']) {
    return this.productRepository.findById(id);
  }

  findByIds(ids: Product['id'][]) {
    return this.productRepository.findByIds(ids);
  }

  async update(
    id: Product['id'],

    updateProductDto: UpdateProductDto,
  ) {
    // Do not remove comment below.
    // <updating-property />
    let TankRef: Tank | undefined = undefined;

    if (updateProductDto.TankRef) {
      const TankRefObject = await this.tankService.findById(
        updateProductDto.TankRef.id,
      );
      if (!TankRefObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            TankRef: 'notExists',
          },
        });
      }
      TankRef = TankRefObject;
    }

    let DepotProductRef: DepotProduct | undefined = undefined;

    if (updateProductDto.DepotProductRef) {
      const DepotProductRefObject = await this.depotProductService.findById(
        updateProductDto.DepotProductRef.id,
      );
      if (!DepotProductRefObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            DepotProductRef: 'notExists',
          },
        });
      }
      DepotProductRef = DepotProductRefObject;
    }

    let ProductCat: Category | null | undefined = undefined;

    if (updateProductDto.ProductCat) {
      const ProductCatObject = await this.categoryService.findById(
        updateProductDto.ProductCat.id,
      );
      if (!ProductCatObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            ProductCat: 'notExists',
          },
        });
      }
      ProductCat = ProductCatObject;
    } else if (updateProductDto.ProductCat === null) {
      ProductCat = null;
    }

    let StationId: Station | null | undefined = undefined;

    if (updateProductDto.StationId) {
      const StationIdObject = await this.stationService.findById(
        updateProductDto.StationId.id,
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
    } else if (updateProductDto.StationId === null) {
      StationId = null;
    }

    return this.productRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      TankRef,

      DepotProductRef,

      ProductCat,

      StationId,

      Description: updateProductDto.Description,

      // ProductCat: updateProductDto.ProductCat,

      DateApplyedPrice: updateProductDto.DateApplyedPrice,

      PurchasingPrice: updateProductDto.PurchasingPrice,

      CurrentPrice: updateProductDto.CurrentPrice,

      QtyTotal: updateProductDto.QtyTotal,

      Unit: updateProductDto.Unit,

      name: updateProductDto.name,
    });
  }

  remove(id: Product['id']) {
    return this.productRepository.remove(id);
  }
}
