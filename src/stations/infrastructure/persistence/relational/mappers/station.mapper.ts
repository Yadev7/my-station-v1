import { Station } from '../../../../domain/station';

import { OwnerMapper } from '../../../../../owners/infrastructure/persistence/relational/mappers/owner.mapper';

import { StationEntity } from '../entities/station.entity';

export class StationMapper {
  static toDomain(raw: StationEntity): Station {
    const domainEntity = new Station();
    domainEntity.adresse = raw.adresse;

    domainEntity.contact = raw.contact;

    domainEntity.DisplayHeaderFooter = raw.DisplayHeaderFooter;

    domainEntity.SignatureImg = raw.SignatureImg;

    domainEntity.StampsImg = raw.StampsImg;

    domainEntity.Logo = raw.Logo;

    domainEntity.TVAShop = raw.TVAShop;

    domainEntity.TVACoffeeRest = raw.TVACoffeeRest;

    domainEntity.TVAService = raw.TVAService;

    domainEntity.TVALubrifion = raw.TVALubrifion;

    domainEntity.TVACarb = raw.TVACarb;

    domainEntity.URLSITE = raw.URLSITE;

    domainEntity.CNSS = raw.CNSS;

    domainEntity.IF = raw.IF;

    domainEntity.RC = raw.RC;

    domainEntity.ICE = raw.ICE;

    if (raw.OwnerId) {
      domainEntity.OwnerId = OwnerMapper.toDomain(raw.OwnerId);
    } else if (raw.OwnerId === null) {
      domainEntity.OwnerId = null;
    }

    domainEntity.name = raw.name;

    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Station): StationEntity {
    const persistenceEntity = new StationEntity();
    persistenceEntity.adresse = domainEntity.adresse;

    persistenceEntity.contact = domainEntity.contact;

    persistenceEntity.DisplayHeaderFooter = domainEntity.DisplayHeaderFooter;

    persistenceEntity.SignatureImg = domainEntity.SignatureImg;

    persistenceEntity.StampsImg = domainEntity.StampsImg;

    persistenceEntity.Logo = domainEntity.Logo;

    persistenceEntity.TVAShop = domainEntity.TVAShop;

    persistenceEntity.TVACoffeeRest = domainEntity.TVACoffeeRest;

    persistenceEntity.TVAService = domainEntity.TVAService;

    persistenceEntity.TVALubrifion = domainEntity.TVALubrifion;

    persistenceEntity.TVACarb = domainEntity.TVACarb;

    persistenceEntity.URLSITE = domainEntity.URLSITE;

    persistenceEntity.CNSS = domainEntity.CNSS;

    persistenceEntity.IF = domainEntity.IF;

    persistenceEntity.RC = domainEntity.RC;

    persistenceEntity.ICE = domainEntity.ICE;

    if (domainEntity.OwnerId) {
      persistenceEntity.OwnerId = OwnerMapper.toPersistence(
        domainEntity.OwnerId,
      );
    } else if (domainEntity.OwnerId === null) {
      persistenceEntity.OwnerId = null;
    }

    persistenceEntity.name = domainEntity.name;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
