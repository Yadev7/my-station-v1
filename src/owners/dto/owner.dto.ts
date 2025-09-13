import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class OwnerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}
