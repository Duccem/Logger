import * as winston from 'winston';
import { Logger } from '../types/Logger';
import { colorFormat } from './formats';
export interface ConsoleLoggerOptions {}
export class ConsoleLogger implements Logger {
  private winstonLogger: winston.Logger;
  constructor(options: winston.LoggerOptions = {}) {
    this.winstonLogger = winston.createLogger({
      levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6,
      },
      transports: [
        new winston.transports.Console({
          level: 'silly',
        }),
      ],
      format: colorFormat,
      ...options,
    });
  }
  log(message: any): void {
    this.winstonLogger.log('info', message);
  }
  error(_message: any, stack?: any): void {
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
