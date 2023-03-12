import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('map')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMapJsonWithCode(
    @Query('code') code: string,
    @Query('isFull') isFull?: boolean,
  ): Promise<object> {
    return this.appService.getMapJsonWithCode(code, isFull);
  }
}
