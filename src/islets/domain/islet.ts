import { Station } from '../../stations/domain/station';
import { ApiProperty } from '@nestjs/swagger';

export class Islet {
  @ApiProperty({
    type: () => Station,
    nullable: true,
  })
  StationId?: Station | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  Description?: string | null;

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
