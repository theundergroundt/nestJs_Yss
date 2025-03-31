import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hiCatserviceProduct() {
    return 'hello cat';
  }
}
