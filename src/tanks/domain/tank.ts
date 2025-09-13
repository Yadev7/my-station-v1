import { Product } from '../../products/domain/product';
import { Station } from '../../stations/domain/station';
import { ApiProperty } from '@nestjs/swagger';

export class Tank {
  @ApiProperty({
    type: () => [Product],
    nullable: true,
  })
  ProductId?: Product[] | null;

  @ApiProperty({
    type: () => Station,
    nullable: true,
  })
  StationId?: Station | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  MaxCapacity?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  MinCapacity?: number | null;

  @ApiProperty({
    type: () => Boolean,
    nullable: true,
  })
  DirectSale?: boolean | null;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  ContentType?: string | null;

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
