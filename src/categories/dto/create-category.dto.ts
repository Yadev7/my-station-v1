import {
  // decorators here
  IsNotEmpty,
  IsString,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: false, type: String, nullable: true })
  @IsString()
  parentId?: string;
}
