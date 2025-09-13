import { OwnersModule } from '../owners/owners.module';
import {
  // do not remove this comment
  Module,
} from '@nestjs/common';
import { StationsService } from './stations.service';
import { StationsController } from './stations.controller';
import { RelationalStationPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [
    OwnersModule,

    // do not remove this comment
    RelationalStationPersistenceModule,
  ],
  controllers: [StationsController],
  providers: [StationsService],
  exports: [StationsService, RelationalStationPersistenceModule],
})
export class StationsModule {}
