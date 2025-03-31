import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [CatsModule], // 모듈 여러개 추가 가능
  controllers: [AppController],
  providers: [AppService], // 프로바이더에 있는것을 위 컨트롤러가 사용 가능
})
export class AppModule {}
