import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from '../../shared/dto/address.dto';
import { ContactDto } from '../../shared/dto/contact.dto';

export class Depot {
  @ApiProperty({
    type: () => ContactDto,
    nullable: true,
  })
  contact?: ContactDto | null;

  @ApiProperty({
    type: () => AddressDto,
    nullable: true,
  })
  adresse?: AddressDto | null;

  @ApiProperty({
    type: () => String,
    nullable: false,
  })
  name: string;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
