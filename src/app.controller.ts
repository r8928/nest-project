import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('aaa')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/')
  root(@Query('msg') msg) {
    if (msg == 'high') {
      return { url: 'http://localhost:3000/aaa/high', statusCode: 302 };
    }

    return 'bye';
  }

  @Get('high')
  getHello(): string {
    return this.appService.getHello();
  }
}
