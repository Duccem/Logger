import * as winston from 'winston';
import LokiTransport from 'winston-loki';
import { Logger, LoggerOptions } from '../types/Logger';
import { format } from './formats';
import { FormatDates } from '..';
export interface LokiLoggerOptions extends LoggerOptions {
  labels: { [key: string]: string };
  url?: string;
}
export class LokiLogger implements Logger {
  private winstonLogger: winston.Logger;
  constructor(
    { labels, url, dateFormat }: LokiLoggerOptions = { labels: {}, dateFormat: FormatDates.ISO, url: 'http://localhost:3100/loki/api/v1/push' }
  ) {
    this.winstonLogger = winston.createLogger({
      level: 'silly',
      transports: [new winston.transports.Console(), new LokiTransport({ host: url, labels })],
      format: format(dateFormat),
    });
  }
  log(message: any): void {
    this.winstonLogger.log('info', message);
  }
  error(message: any): void {
    this.winstonLogger.error(message);
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
