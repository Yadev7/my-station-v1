import { StationDto } from '../../stations/dto/station.dto';

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

export class CreateIsletDto {
  @ApiProperty({
    required: false,
    type: () => StationDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => StationDto)
  @IsNotEmptyObject()
  StationId?: StationDto | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  Description?: string | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  name?: string | null;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
