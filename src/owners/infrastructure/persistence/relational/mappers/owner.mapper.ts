import { Owner } from '../../../../domain/owner';

import { OwnerEntity } from '../entities/owner.entity';

export class OwnerMapper {
  static toDomain(raw: OwnerEntity): Owner {
    const domainEntity = new Owner();
    domainEntity.contact = raw.contact;

    domainEntity.entreprise = raw.entreprise;

    domainEntity.type = raw.type;

    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Owner): OwnerEntity {
    const persistenceEntity = new OwnerEntity();
    persistenceEntity.contact = domainEntity.contact;

    persistenceEntity.entreprise = domainEntity.entreprise;

    persistenceEntity.type = domainEntity.type;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
