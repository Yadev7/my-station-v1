import { ProductsModule } from '../products/products.module';
import { StationsModule } from '../stations/stations.module';
import {
  // do not remove this comment
  Module,
  forwardRef,
} from '@nestjs/common';
import { TanksService } from './tanks.service';
import { TanksController } from './tanks.controller';
import { RelationalTankPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [
    forwardRef(() => ProductsModule),

    StationsModule,

    // do not remove this comment
    RelationalTankPersistenceModule,
  ],
  controllers: [TanksController],
  providers: [TanksService],
  exports: [TanksService, RelationalTankPersistenceModule],
})
export class TanksModule {}
