import { Dispenser } from '../../dispensers/domain/dispenser';
import { ApiProperty } from '@nestjs/swagger';

export class Nozzle {
  @ApiProperty({
    type: () => Dispenser,
    nullable: true,
  })
  DispenserId?: Dispenser | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  percentageOil?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  index?: number | null;

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
