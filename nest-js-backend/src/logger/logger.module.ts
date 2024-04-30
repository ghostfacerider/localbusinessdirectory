import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerController } from './logger.controller';

@Module({
  providers: [LoggerService],
  controllers: [LoggerController],
  exports: [LoggerService], // Add this line to export LoggerService
})
export class LoggerModule {}
