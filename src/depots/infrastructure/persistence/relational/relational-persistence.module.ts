import { Module } from '@nestjs/common';
import { DepotRepository } from '../depot.repository';
import { DepotRelationalRepository } from './repositories/depot.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepotEntity } from './entities/depot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DepotEntity])],
  providers: [
    {
      provide: DepotRepository,
      useClass: DepotRelationalRepository,
    },
  ],
  exports: [DepotRepository],
})
export class RelationalDepotPersistenceModule {}
