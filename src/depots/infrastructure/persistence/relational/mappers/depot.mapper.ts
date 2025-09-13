import { Depot } from '../../../../domain/depot';

import { DepotEntity } from '../entities/depot.entity';

export class DepotMapper {
  static toDomain(raw: DepotEntity): Depot {
    const domainEntity = new Depot();
    domainEntity.contact = raw.contact;

    domainEntity.adresse = raw.adresse;

    domainEntity.name = raw.name;

    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Depot): DepotEntity {
    const persistenceEntity = new DepotEntity();
    persistenceEntity.contact = domainEntity.contact;

    persistenceEntity.adresse = domainEntity.adresse;

    persistenceEntity.name = domainEntity.name;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
