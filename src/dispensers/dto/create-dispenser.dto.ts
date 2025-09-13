import { IsletDto } from '../../islets/dto/islet.dto';

import {
  // decorators here

  IsString,
  IsOptional,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

import {
  // decorators here
  Type,
} from 'class-transformer';

export class CreateDispenserDto {
  @ApiProperty({
    required: false,
    type: () => IsletDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => IsletDto)
  @IsNotEmptyObject()
  IsletId?: IsletDto | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  brand?: string | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  name?: string | null;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
