import {
  // decorators here
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

import { ContactDto } from '../../shared/dto/contact.dto';
import { EntrepriseDto } from '../../shared/dto/entreprise.dto';
import { Type } from 'class-transformer';

export class CreateOwnerDto {
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
    type: () => EntrepriseDto,
  })
  @IsOptional()
  @ValidateNested() // Use @ValidateNested() to validate the inner object
  @Type(() => EntrepriseDto) // Use @Type() here
  entreprise?: EntrepriseDto | null;

  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  type?: string | null;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
