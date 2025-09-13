import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { DepotsService } from './depots.service';
import { CreateDepotDto } from './dto/create-depot.dto';
import { UpdateDepotDto } from './dto/update-depot.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Depot } from './domain/depot';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllDepotsDto } from './dto/find-all-depots.dto';

@ApiTags('Depots')
// @ApiBearerAuth()
// @UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'depots',
  version: '1',
})
export class DepotsController {
  constructor(private readonly depotsService: DepotsService) {}

  @Post()
  @ApiCreatedResponse({
    type: Depot,
  })
  create(@Body() createDepotDto: CreateDepotDto) {
    return this.depotsService.create(createDepotDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Depot),
  })
  async findAll(
    @Query() query: FindAllDepotsDto,
  ): Promise<InfinityPaginationResponseDto<Depot>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.depotsService.findAllWithPagination({
        paginationOptions: {
          page,
          limit,
        },
      }),
      { page, limit },
    );
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Depot,
  })
  findById(@Param('id') id: string) {
    return this.depotsService.findById(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Depot,
  })
  update(@Param('id') id: string, @Body() updateDepotDto: UpdateDepotDto) {
    return this.depotsService.update(id, updateDepotDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.depotsService.remove(id);
  }
}
