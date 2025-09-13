import { OwnerDto } from '../../owners/dto/owner.dto';
import { ContactDto } from '../../shared/dto/contact.dto';

import {
  // decorators here

  IsString,
  IsOptional,
  ValidateNested,
  IsNotEmptyObject,
  IsNumber,
  IsBoolean,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

import {
  // decorators here
  Type,
} from 'class-transformer';
import { AddressDto } from 'src/shared/dto/address.dto';

export class CreateStationDto {
  @ApiProperty({
    required: false,
    type: () => AddressDto,
  })
  @IsOptional()
  @IsString()
  adresse?: AddressDto | null;

  @ApiProperty({
    required: false,
    type: () => ContactDto,
  })
  @IsOptional()
  @IsString()
  contact?: ContactDto | null;

  @ApiProperty({
    required: false,
    type: () => Boolean,
  })
  @IsOptional()
  @IsBoolean()
  DisplayHeaderFooter?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  SignatureImg?: string | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  StampsImg?: string | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  Logo?: string | null;

  @ApiProperty({
    required: false,
    type: () => Number,
  })
  @IsOptional()
  @IsNumber()
  TVAShop?: number | null;

  @ApiProperty({
    required: false,
    type: () => Number,
  })
  @IsOptional()
  @IsNumber()
  TVACoffeeRest?: number | null;

  @ApiProperty({
    required: false,
    type: () => Number,
  })
  @IsOptional()
  @IsNumber()
  TVAService?: number | null;

  @ApiProperty({
    required: false,
    type: () => Number,
  })
  @IsOptional()
  @IsNumber()
  TVALubrifion?: number | null;

  @ApiProperty({
    required: false,
    type: () => Number,
  })
  @IsOptional()
  @IsNumber()
  TVACarb?: number | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  URLSITE?: string | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  CNSS?: string | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  IF?: string | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  RC?: string | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  ICE?: string | null;

  @ApiProperty({
    required: false,
    type: () => OwnerDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => OwnerDto)
  @IsNotEmptyObject()
  OwnerId?: OwnerDto | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  name?: string | null;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
