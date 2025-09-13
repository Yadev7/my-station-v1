// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateOwnerDto } from './create-owner.dto';

export class UpdateOwnerDto extends PartialType(CreateOwnerDto) {}
