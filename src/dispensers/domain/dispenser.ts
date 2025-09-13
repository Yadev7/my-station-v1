import { Islet } from '../../islets/domain/islet';
import { ApiProperty } from '@nestjs/swagger';

export class Dispenser {
  @ApiProperty({
    type: () => Islet,
    nullable: true,
  })
  IsletId?: Islet | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  brand?: string | null;

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
