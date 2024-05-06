// custom-logger.service.ts
import { Injectable, LoggerService, Scope } from '@nestjs/common';
import { logger } from './winston.config';

@Injectable({ scope: Scope.TRANSIENT })
export class CustomLogger implements LoggerService {
  private context?: string;

  setContext(context: string) {
    this.context = context;
  }

  log(message: string) {
    console.log(message)
    logger.info(message, { context: this.context });
  }

  error(message: string, trace?: string) {
    console.log(message)
    logger.error(message, { trace, context: this.context });
  }

  warn(message: string) {
    console.log(message)
    logger.warn(message, { context: this.context });
  }

  debug(message: string) {
    console.log(message)
    logger.debug(message, { context: this.context });
  }

  verbose(message: string) {
    console.log(message)
    logger.verbose(message, { context: this.context });
  }
}
