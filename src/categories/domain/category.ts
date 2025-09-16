import { ApiProperty } from '@nestjs/swagger';

export class Category {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: () => String,
    nullable: false,
  })
  name: string;

    @ApiProperty({
    type: () => Category,
    nullable: true,
    required: false,
  })
  parent?: Category | null;

  @ApiProperty({
    type: () => [Category],
    required: false,
  })
  children?: Category[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
