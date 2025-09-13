import {
  // do not remove this comment
  Module,
} from '@nestjs/common';
import { DepotsService } from './depots.service';
import { DepotsController } from './depots.controller';
import { RelationalDepotPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [
    // do not remove this comment
    RelationalDepotPersistenceModule,
  ],
  controllers: [DepotsController],
  providers: [DepotsService],
  exports: [DepotsService, RelationalDepotPersistenceModule],
})
export class DepotsModule {}
