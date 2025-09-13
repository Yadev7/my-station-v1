import { Product } from '../../../../domain/product';
import { TankMapper } from '../../../../../tanks/infrastructure/persistence/relational/mappers/tank.mapper';

import { CategoryMapper } from '../../../../../categories/infrastructure/persistence/relational/mappers/category.mapper';

import { StationMapper } from '../../../../../stations/infrastructure/persistence/relational/mappers/station.mapper';

import { ProductEntity } from '../entities/product.entity';

export class ProductMapper {
  static toDomain(raw: ProductEntity): Product {
    const domainEntity = new Product();
    if (raw.TankRef) {
      domainEntity.TankRef = TankMapper.toDomain(raw.TankRef);
    }

    if (raw.ProductCat) {
      domainEntity.ProductCat = CategoryMapper.toDomain(raw.ProductCat);
    } else if (raw.ProductCat === null) {
      domainEntity.ProductCat = null;
    }

    if (raw.station) {
      domainEntity.StationId = StationMapper.toDomain(raw.station);
    } else if (raw.station === null) {
      domainEntity.StationId = null;
    }

    domainEntity.Description = raw.description;

    domainEntity.ProductCat = raw.ProductCat;

    domainEntity.DateApplyedPrice = raw.dateAppliedPrice;

    domainEntity.PurchasingPrice = raw.purchasingPrice;

    domainEntity.CurrentPrice = raw.currentPrice;

    domainEntity.QtyTotal = raw.qtyTotal;

    domainEntity.Unit = raw.unit;

    domainEntity.name = raw.name;

    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Product): ProductEntity {
    const persistenceEntity = new ProductEntity();
    if (domainEntity.TankRef) {
      persistenceEntity.TankRef = TankMapper.toPersistence(
        domainEntity.TankRef,
      );
    }

    if (domainEntity.DepotProductRef) {
      persistenceEntity.DepotProductRef = DepotProductMapper.toPersistence(
        domainEntity.DepotProductRef,
      );
    }

    if (domainEntity.ProductCat) {
      persistenceEntity.ProductCat = CategoryMapper.toPersistence(
        domainEntity.ProductCat,
      );
    } else if (domainEntity.ProductCat === null) {
      persistenceEntity.ProductCat = null;
    }

    if (domainEntity.StationId) {
      persistenceEntity.station = StationMapper.toPersistence(
        domainEntity.StationId,
      );
    } else if (domainEntity.StationId === null) {
      persistenceEntity.station = null;
    }

    persistenceEntity.description = domainEntity.Description;

    persistenceEntity.dateAppliedPrice = domainEntity.DateApplyedPrice;

    persistenceEntity.purchasingPrice = domainEntity.PurchasingPrice;

    persistenceEntity.currentPrice = domainEntity.CurrentPrice;

    persistenceEntity.qtyTotal = domainEntity.QtyTotal;

    persistenceEntity.unit = domainEntity.Unit;

    persistenceEntity.name = domainEntity.name;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
