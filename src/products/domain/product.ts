import { Tank } from '../../tanks/domain/tank';

import { Category } from '../../categories/domain/category';
import { Station } from '../../stations/domain/station';
import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({
    type: () => Tank,
    nullable: false,
  })
  TankRef: Tank;

  @ApiProperty({
    type: () => Category,
    nullable: true,
  })
  ProductCat?: Category | null;

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
    type: () => Date,
    nullable: true,
  })
  DateApplyedPrice?: Date | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  PurchasingPrice?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  CurrentPrice?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  QtyTotal?: number | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  Unit?: string | null;

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
