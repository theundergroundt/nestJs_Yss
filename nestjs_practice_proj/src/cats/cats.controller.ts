import { Controller, Get, Post, Delete, Put, Patch } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  // 디펜던시 인젝션
  // 소비자가 catsService라는 제품을 주입받음, 공급자는 module에 있음

  // cats/
  @Get()
  getAllCat() {
    return 'all cat';
  }

  // cats/:id/
  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
