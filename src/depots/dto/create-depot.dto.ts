import { DepotProductDto } from '../../depot-products/dto/depot-product.dto';
import { AddressDto } from '../../shared/dto/address.dto';
import { ContactDto } from '../../shared/dto/contact.dto';

import {
  // decorators here
  IsNotEmpty,
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

import {
  // decorators here
  Type,
} from 'class-transformer';

export class CreateDepotDto {
  @ApiProperty({
    required: false,
    type: () => ContactDto,
  })
  @IsOptional()
  @ValidateNested() // Use @ValidateNested() to validate the inner object
  @Type(() => ContactDto) // Use @Type() to transform the plain object to a class instance
  contact?: ContactDto | null;

  @ApiProperty({
    required: false,
    type: () => AddressDto,
  })
  @IsOptional()
  @ValidateNested() // Use @ValidateNested() here as well
  @Type(() => AddressDto) // And @Type() here
  adresse?: AddressDto | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
