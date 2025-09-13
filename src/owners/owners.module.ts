import {
  // do not remove this comment
  Module,
} from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersController } from './owners.controller';
import { RelationalOwnerPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [
    // do not remove this comment
    RelationalOwnerPersistenceModule,
  ],
  controllers: [OwnersController],
  providers: [OwnersService],
  exports: [OwnersService, RelationalOwnerPersistenceModule],
})
export class OwnersModule {}
