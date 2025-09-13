import { ApiProperty } from '@nestjs/swagger';
import { ContactDto } from '../../shared/dto/contact.dto';
import { EntrepriseDto } from '../../shared/dto/entreprise.dto';

export class Owner {
  @ApiProperty({
    type: () => ContactDto,
    nullable: true,
  })
  contact?: ContactDto | null;

  @ApiProperty({
    type: () => EntrepriseDto,
    nullable: true,
  })
  entreprise?: EntrepriseDto | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  type?: string | null;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
