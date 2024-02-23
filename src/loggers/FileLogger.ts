import * as winston from 'winston';
import { Logger, LoggerOptions } from '../types/Logger';
import { format } from './formats';
import { FormatDates } from '../types/DatesFormats';

export interface FileLoggerOptions extends LoggerOptions {
  fileName: string;
}
export class FileLogger implements Logger {
  private winstonLogger: winston.Logger;
  constructor({ fileName, dateFormat }: FileLoggerOptions = { fileName: 'app', dateFormat: FormatDates.ISO }) {
    const filename = `${fileName}.log`;
    this.winstonLogger = winston.createLogger({
      transports: [
        new winston.transports.Console({ format: format(dateFormat) }),
        new winston.transports.File({ filename, format: format(dateFormat) }),
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
  http(message: any): void {
    this.winstonLogger.http(message);
  }
}
