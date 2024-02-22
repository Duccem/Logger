import * as winston from 'winston';
import { Logger } from '../types/Logger';
import { colorFormat, fileFormat } from './formats';

export interface FileLoggerOptions {
  fileName: string;
}
export class FileLogger implements Logger {
  private winstonLogger: winston.Logger;
  constructor({ fileName }: FileLoggerOptions) {
    const filename = `${fileName}.log`;
    this.winstonLogger = winston.createLogger({
      transports: [
        new winston.transports.Console({ format: colorFormat }),
        new winston.transports.File({ filename, format: fileFormat }),
      ],
      level: 'silly',
    });
  }
  log(message: any): void {
    this.winstonLogger.log('info', message);
  }
  error(message: any, stack?: string): void {
    this.winstonLogger.error(message);
    this.winstonLogger.error(stack);
  }
  warn(message: any): void {
    this.winstonLogger.warn(message);
  }
  debug(message: any): void {
    this.winstonLogger.debug(message);
  }
  verbose(message: any): void {
    this.winstonLogger.verbose(message);
  }
  request(message: any): void {
    this.winstonLogger.http(message);
  }
  response(message: any): void {
    this.winstonLogger.http(message);
  }
}
