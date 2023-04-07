import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ResultVO } from './shared/vo/ResultVO';

@Controller('map')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getMapJsonWithCode(
    @Query('code') code: string,
    @Query('isFull') isFull?: boolean,
  ): Promise<ResultVO> {
    const data = await this.appService.getMapJsonWithCode(code, isFull);
    return ResultVO.success(data);
  }
}
