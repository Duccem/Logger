import * as winston from 'winston';
import { Logger, LoggerOptions } from '../types/Logger';
import { format } from './formats';
import { FormatDates } from '..';
export class ConsoleLogger implements Logger {
  private winstonLogger: winston.Logger;
  constructor({ dateFormat }: LoggerOptions = { dateFormat: FormatDates.ISO }) {
    this.winstonLogger = winston.createLogger({
      transports: [new winston.transports.Console({ level: 'silly' })],
      format: format(dateFormat),
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
  http(message: any): void {
    this.winstonLogger.http(message);
  }
}
