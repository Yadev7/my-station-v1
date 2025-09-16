import {
  // common
  Injectable,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './infrastructure/persistence/category.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Category } from './domain/category';

@Injectable()
export class CategoriesService {
  constructor(
    // Dependencies here
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async create(createCategorieDto: CreateCategoryDto) {
    // Do not remove comment below.
    // <creating-property />

    return this.categoryRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      name: createCategorieDto.name,
      parent: createCategorieDto.parentId
        ? {
            id: createCategorieDto.parentId,
            name: '',
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        : null,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.categoryRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Category['id']) {
    return this.categoryRepository.findById(id);
  }

  findByIds(ids: Category['id'][]) {
    return this.categoryRepository.findByIds(ids);
  }

  async update(
    id: Category['id'],

    updateCategoryDto: UpdateCategoryDto,
  ) {
    // Do not remove comment below.
    // <updating-property />

    return this.categoryRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      name: updateCategoryDto.name,
    });
  }

  remove(id: Category['id']) {
    return this.categoryRepository.remove(id);
  }
}
