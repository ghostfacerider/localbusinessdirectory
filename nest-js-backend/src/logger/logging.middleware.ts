import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerService } from './logger.service';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, body } = req;
    const start = Date.now();
    
    // Logging incoming request
    this.logger.log(`Incoming request - Method: ${method}, URL: ${originalUrl}, Body: ${JSON.stringify(body)}`);

    // Logging outgoing response
    res.on('finish', () => {
      const duration = Date.now() - start;
      this.logger.log(`Outgoing response - Method: ${method}, URL: ${originalUrl}, Status: ${res.statusCode}, Duration: ${duration}ms`);
    });

    next();
  }
}
 