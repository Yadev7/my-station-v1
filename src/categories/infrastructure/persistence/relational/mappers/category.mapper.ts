import { Category } from '../../../../domain/category';

import { CategoryEntity } from '../entities/category.entity';

export class CategoryMapper {
  static toDomain(raw: CategoryEntity): Category {
    const domainEntity = new Category();
    domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

        // Map parent (avoid deep recursion)
    if (raw.parent) {
      domainEntity.parent = new Category();
      domainEntity.parent.id = raw.parent.id;
      domainEntity.parent.name = raw.parent.name;
    } else {
      domainEntity.parent = null;
    }

    // Map children (shallow, only id/name)
    if (raw.children) {
      domainEntity.children = raw.children.map((child) => {
        const c = new Category();
        c.id = child.id;
        c.name = child.name;
        return c;
      });
    } else {
      domainEntity.children = [];
    }

    return domainEntity;
  }



  static toPersistence(domainEntity: Category): CategoryEntity {
    const persistenceEntity = new CategoryEntity();
    persistenceEntity.name = domainEntity.name;


    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }

    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

     // Map parent by id only (avoid recursion)
    if (domainEntity.parent && domainEntity.parent.id) {
      persistenceEntity.parent = {
        id: domainEntity.parent.id,
      } as CategoryEntity;
    } else {
      persistenceEntity.parent = null;
    }

    // Children are not set directly in persistence (managed by ORM)
    return persistenceEntity;
  }
}
