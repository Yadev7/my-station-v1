import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DepotDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}
