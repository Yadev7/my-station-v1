import { Dispenser } from '../../../../domain/dispenser';
import { IsletMapper } from '../../../../../islets/infrastructure/persistence/relational/mappers/islet.mapper';

import { DispenserEntity } from '../entities/dispenser.entity';

export class DispenserMapper {
  static toDomain(raw: DispenserEntity): Dispenser {
    const domainEntity = new Dispenser();
    if (raw.IsletId) {
      domainEntity.IsletId = IsletMapper.toDomain(raw.IsletId);
    } else if (raw.IsletId === null) {
      domainEntity.IsletId = null;
    }

    domainEntity.brand = raw.brand;

    domainEntity.name = raw.name;

    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Dispenser): DispenserEntity {
    const persistenceEntity = new DispenserEntity();
    if (domainEntity.IsletId) {
      persistenceEntity.IsletId = IsletMapper.toPersistence(
        domainEntity.IsletId,
      );
    } else if (domainEntity.IsletId === null) {
      persistenceEntity.IsletId = null;
    }

    persistenceEntity.brand = domainEntity.brand;

    persistenceEntity.name = domainEntity.name;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
