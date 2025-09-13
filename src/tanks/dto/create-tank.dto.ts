import { ProductDto } from '../../products/dto/product.dto';

import { StationDto } from '../../stations/dto/station.dto';

import {
  // decorators here

  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
  ValidateNested,
  IsNotEmptyObject,
  IsArray,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

import {
  // decorators here
  Type,
} from 'class-transformer';

export class CreateTankDto {
  @ApiProperty({
    required: false,
    type: () => [ProductDto],
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => ProductDto)
  @IsArray()
  ProductId?: ProductDto[] | null;

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
    type: () => Number,
  })
  @IsOptional()
  @IsNumber()
  MaxCapacity?: number | null;

  @ApiProperty({
    required: false,
    type: () => Number,
  })
  @IsOptional()
  @IsNumber()
  MinCapacity?: number | null;

  @ApiProperty({
    required: false,
    type: () => Boolean,
  })
  @IsOptional()
  @IsBoolean()
  DirectSale?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  ContentType?: string | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  name?: string | null;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
