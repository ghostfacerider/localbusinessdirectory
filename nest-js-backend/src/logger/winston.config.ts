import * as winston from 'winston';
import 'winston-daily-rotate-file';
import * as winstonMongoDB from 'winston-mongodb';

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      // Add a timestamp to the console logs
      winston.format.timestamp(),
      // Add colors to you logs
      winston.format.colorize(),
      // What the details you need as logs
      winston.format.printf(({ timestamp, level, message, context, trace }) => {
        return `${timestamp} [${context}] ${level}: ${message}${trace ? `\n${trace}` : ''}`;
      }),
    ),
  }),
  new winston.transports.DailyRotateFile({
    filename: 'logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  }),
  new winstonMongoDB.MongoDB({
    level: 'info',
    db: 'mongodb://localhost:27017/localbusinessdirectory',
    options: {
      useUnifiedTopology: true,
    },
    collection: 'logs',
    format: winston.format.combine(
      winston.format.timestamp(), // Add a timestamp to MongoDB logs
      winston.format.json(), // Use JSON format for MongoDB logs
    ),
  }),
];

// Create and export the logger instance
export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports,
});
