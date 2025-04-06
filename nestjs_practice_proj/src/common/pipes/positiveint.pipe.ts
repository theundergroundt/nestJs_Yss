// id가 float를 들어오면 정수로 바꿔줘야하고 등등
// 음수 아닌 양수만 되게

import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PositivePipe implements PipeTransform {
  transform(value: number) {
    //console.log(value);
    if (value < 0) {
      throw new HttpException('value > 0', 400);
    }
    return value;
  }
}
