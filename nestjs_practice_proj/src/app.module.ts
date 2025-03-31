import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule], // 모듈 여러개 추가 가능
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
