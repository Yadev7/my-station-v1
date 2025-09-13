import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsEmail,
  ValidateNested, // Use this for nested DTOs
} from 'class-validator';
import { Type } from 'class-transformer'; // Required for nested DTO validation
import { AddressDto } from './address.dto';

export class ContactDto {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  job?: string;

  /**
   * This field is required and cannot be an empty string.
   */
  @IsString()
  @IsNotEmpty()
  mobilePhone: string;

  /**
   * This field is also required and cannot be an empty string.
   */
  @IsString()
  @IsNotEmpty()
  groundPhone: string;

  @IsOptional()
  @IsEmail()
  mailBox?: string;

  /**
   * For validating nested objects, you need @ValidateNested.
   * @Type is needed for class-transformer to know which class to instantiate.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDto)
  contactAddress?: AddressDto;
}
