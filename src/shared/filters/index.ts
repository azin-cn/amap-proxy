import { Provider } from '@nestjs/common';
import { AllExceptionFilter } from './all.exception';
import { APP_FILTER } from '@nestjs/core';

export const GLOBAL_FILTERS: Provider[] = [AllExceptionFilter].map((item) => ({
  provide: APP_FILTER,
  useClass: item,
}));
