import { IsInt, IsOptional, IsString, IsNotEmpty } from 'class-validator';
export class AddressDto {
  @IsString()
  @IsOptional()
  country: string = 'Maroc';

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  line1: string;

  @IsOptional()
  @IsString()
  line2?: string;

  @IsOptional()
  @IsInt()
  postalCode?: number;
}
