import { Controller, Get, Req, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id/:name')
  getHello(
    @Req() req: Request,
    @Body() Body,
    @Param() param: { id: string; name: string },
  ): string {
    return this.appService.getHello();
    //console.log(req);
    //console.log(param);
    //return 'hello world';
  }
}
