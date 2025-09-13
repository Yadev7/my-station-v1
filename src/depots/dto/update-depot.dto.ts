// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateDepotDto } from './create-depot.dto';

export class UpdateDepotDto extends PartialType(CreateDepotDto) {}
