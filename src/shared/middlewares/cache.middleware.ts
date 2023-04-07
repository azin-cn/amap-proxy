import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CacheControlMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    /**
     * 设置响应头，出现异常则由过滤器去除
     */
    res.setHeader('Cache-Control', `max-age=${60 * 60 * 24 * 3}`);
    next();
  }
}
