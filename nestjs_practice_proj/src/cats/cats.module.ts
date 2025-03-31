import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  // controller도 만들고 provider도 만들자
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // export를 해야 외부에서 사용 가능 ( 외부 : appcontroller, appservice 등 )
})
export class CatsModule {}
