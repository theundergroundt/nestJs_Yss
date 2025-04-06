import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Patch,
  HttpException,
  UseFilters,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-exception.filter';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  // 디펜던시 인젝션
  // 소비자가 catsService라는 제품을 주입받음, 공급자는 module에 있음

  // cats/
  @Get()
  getAllCat() {
    // throw new HttpException('api broken', 401);
    return 'get all cat api';
  }

  // cats/:id/
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log(param);
    return 'get one cat api';
  }

  @Post()
  createCat() {
    return 'create cat api';
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
