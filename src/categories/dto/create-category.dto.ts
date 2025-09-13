import {
  // decorators here
  IsNotEmpty,
  IsString,
  IsOptional,
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

  // Don't forget to use the class-validator decorators in the DTO properties.
}
