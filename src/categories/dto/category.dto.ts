import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ required: false, type: () => CategoryDto, nullable: true })
  parent?: CategoryDto | null;

  @ApiProperty({ required: false, type: () => [CategoryDto] })
  children?: CategoryDto[];
}
