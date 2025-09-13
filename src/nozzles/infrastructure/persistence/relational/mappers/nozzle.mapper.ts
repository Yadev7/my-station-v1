import { Nozzle } from '../../../../domain/nozzle';
import { DispenserMapper } from '../../../../../dispensers/infrastructure/persistence/relational/mappers/dispenser.mapper';

import { NozzleEntity } from '../entities/nozzle.entity';

export class NozzleMapper {
  static toDomain(raw: NozzleEntity): Nozzle {
    const domainEntity = new Nozzle();
    if (raw.DispenserId) {
      domainEntity.DispenserId = DispenserMapper.toDomain(raw.DispenserId);
    } else if (raw.DispenserId === null) {
      domainEntity.DispenserId = null;
    }

    domainEntity.percentageOil = raw.percentageOil;

    domainEntity.index = raw.index;

    domainEntity.name = raw.name;

    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Nozzle): NozzleEntity {
    const persistenceEntity = new NozzleEntity();
    if (domainEntity.DispenserId) {
      persistenceEntity.DispenserId = DispenserMapper.toPersistence(
        domainEntity.DispenserId,
      );
    } else if (domainEntity.DispenserId === null) {
      persistenceEntity.DispenserId = null;
    }

    persistenceEntity.percentageOil = domainEntity.percentageOil;

    persistenceEntity.index = domainEntity.index;

    persistenceEntity.name = domainEntity.name;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
