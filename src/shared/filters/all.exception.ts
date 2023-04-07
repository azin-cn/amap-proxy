import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ResultVO } from '../vo/ResultVO';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log(new Date().toLocaleString(), exception);

    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    // response.removeHeader('Cache-Control');
    response.setHeader('Cache-Control', 'max-age=0'); // 一年过期

    response.status(status).json(ResultVO.fail('请求发生错误', status));
  }
}
