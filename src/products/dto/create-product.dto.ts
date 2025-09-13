import { TankDto } from '../../tanks/dto/tank.dto';

import { CategoryDto } from '../../categories/dto/category.dto';

import { StationDto } from '../../stations/dto/station.dto';

import {
  // decorators here

  IsString,
  IsOptional,
  IsNumber,
  IsDate,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

import {
  // decorators here

  Transform,
  Type,
} from 'class-transformer';

export class CreateProductDto {
  @ApiProperty({
    required: true,
    type: () => TankDto,
  })
  @ValidateNested()
  @Type(() => TankDto)
  @IsNotEmptyObject()
  TankRef: TankDto;

  @ApiProperty({
    required: false,
    type: () => CategoryDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => CategoryDto)
  @IsNotEmptyObject()
  ProductCat?: CategoryDto | null;

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
    type: () => Date,
  })
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  DateApplyedPrice?: Date | null;

  @ApiProperty({
    required: false,
    type: () => Number,
  })
  @IsOptional()
  @IsNumber()
  PurchasingPrice?: number | null;

  @ApiProperty({
    required: false,
    type: () => Number,
  })
  @IsOptional()
  @IsNumber()
  CurrentPrice?: number | null;

  @ApiProperty({
    required: false,
    type: () => Number,
  })
  @IsOptional()
  @IsNumber()
  QtyTotal?: number | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  Unit?: string | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  name?: string | null;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
