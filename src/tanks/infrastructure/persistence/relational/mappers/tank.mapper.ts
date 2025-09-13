import { Tank } from '../../../../domain/tank';
import { ProductMapper } from '../../../../../products/infrastructure/persistence/relational/mappers/product.mapper';

import { StationMapper } from '../../../../../stations/infrastructure/persistence/relational/mappers/station.mapper';

import { TankEntity } from '../entities/tank.entity';

export class TankMapper {
  static toDomain(raw: TankEntity): Tank {
    const domainEntity = new Tank();
    if (raw.ProductId) {
      domainEntity.ProductId = raw.ProductId.map((item) =>
        ProductMapper.toDomain(item),
      );
    } else if (raw.ProductId === null) {
      domainEntity.ProductId = null;
    }

    if (raw.StationId) {
      domainEntity.StationId = StationMapper.toDomain(raw.StationId);
    } else if (raw.StationId === null) {
      domainEntity.StationId = null;
    }

    domainEntity.MaxCapacity = raw.MaxCapacity;

    domainEntity.MinCapacity = raw.MinCapacity;

    domainEntity.DirectSale = raw.DirectSale;

    domainEntity.ContentType = raw.ContentType;

    domainEntity.name = raw.name;

    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Tank): TankEntity {
    const persistenceEntity = new TankEntity();
    if (domainEntity.ProductId) {
      persistenceEntity.ProductId = domainEntity.ProductId.map((item) =>
        ProductMapper.toPersistence(item),
      );
    } else if (domainEntity.ProductId === null) {
      persistenceEntity.ProductId = null;
    }

    if (domainEntity.StationId) {
      persistenceEntity.StationId = StationMapper.toPersistence(
        domainEntity.StationId,
      );
    } else if (domainEntity.StationId === null) {
      persistenceEntity.StationId = null;
    }

    persistenceEntity.MaxCapacity = domainEntity.MaxCapacity;

    persistenceEntity.MinCapacity = domainEntity.MinCapacity;

    persistenceEntity.DirectSale = domainEntity.DirectSale;

    persistenceEntity.ContentType = domainEntity.ContentType;

    persistenceEntity.name = domainEntity.name;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
