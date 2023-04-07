import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheControlMiddleware } from './shared/middlewares/cache.middleware';
import { GLOBAL_FILTERS } from './shared/filters';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ...GLOBAL_FILTERS],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CacheControlMiddleware).forRoutes('*');
  }
}
