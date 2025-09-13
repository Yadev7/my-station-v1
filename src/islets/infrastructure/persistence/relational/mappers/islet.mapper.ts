import { Islet } from '../../../../domain/islet';
import { StationMapper } from '../../../../../stations/infrastructure/persistence/relational/mappers/station.mapper';

import { IsletEntity } from '../entities/islet.entity';

export class IsletMapper {
  static toDomain(raw: IsletEntity): Islet {
    const domainEntity = new Islet();
    if (raw.StationId) {
      domainEntity.StationId = StationMapper.toDomain(raw.StationId);
    } else if (raw.StationId === null) {
      domainEntity.StationId = null;
    }

    domainEntity.Description = raw.Description;

    domainEntity.name = raw.name;

    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Islet): IsletEntity {
    const persistenceEntity = new IsletEntity();
    if (domainEntity.StationId) {
      persistenceEntity.StationId = StationMapper.toPersistence(
        domainEntity.StationId,
      );
    } else if (domainEntity.StationId === null) {
      persistenceEntity.StationId = null;
    }

    persistenceEntity.Description = domainEntity.Description;

    persistenceEntity.name = domainEntity.name;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
