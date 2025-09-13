import { Module } from '@nestjs/common';
import { OwnerRepository } from '../owner.repository';
import { OwnerRelationalRepository } from './repositories/owner.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerEntity } from './entities/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OwnerEntity])],
  providers: [
    {
      provide: OwnerRepository,
      useClass: OwnerRelationalRepository,
    },
  ],
  exports: [OwnerRepository],
})
export class RelationalOwnerPersistenceModule {}
