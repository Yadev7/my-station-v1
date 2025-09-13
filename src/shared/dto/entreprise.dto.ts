import { IsOptional, IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { AddressDto } from './address.dto';
export class EntrepriseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  headOffice: AddressDto;

  @IsOptional()
  @IsString()
  logo?: string;

  @IsOptional()
  @IsUrl()
  siteURL?: string;
}
