import { ContactDto } from 'src/shared/dto/contact.dto';
import { Owner } from '../../owners/domain/owner';
import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from 'src/shared/dto/address.dto';

export class Station {
  @ApiProperty({
    type: () => AddressDto,
    nullable: true,
  })
  adresse?: AddressDto | null;

  @ApiProperty({
    type: () => ContactDto,
    nullable: true,
  })
  contact?: ContactDto | null;

  @ApiProperty({
    type: () => Boolean,
    nullable: true,
  })
  DisplayHeaderFooter?: boolean | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  SignatureImg?: string | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  StampsImg?: string | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  Logo?: string | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  TVAShop?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  TVACoffeeRest?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  TVAService?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  TVALubrifion?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  TVACarb?: number | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  URLSITE?: string | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  CNSS?: string | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  IF?: string | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  RC?: string | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  ICE?: string | null;

  @ApiProperty({
    type: () => Owner,
    nullable: true,
  })
  OwnerId?: Owner | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
