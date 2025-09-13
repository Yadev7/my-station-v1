import { IsletsModule } from '../islets/islets.module';
import {
  // do not remove this comment
  Module,
} from '@nestjs/common';
import { DispensersService } from './dispensers.service';
import { DispensersController } from './dispensers.controller';
import { RelationalDispenserPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [
    IsletsModule,

    // do not remove this comment
    RelationalDispenserPersistenceModule,
  ],
  controllers: [DispensersController],
  providers: [DispensersService],
  exports: [DispensersService, RelationalDispenserPersistenceModule],
})
export class DispensersModule {}
