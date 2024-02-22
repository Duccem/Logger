import * as winston from 'winston';
import LokiTransport from 'winston-loki';
import { Logger } from '../types/Logger';
import { colorFormat } from './formats';
export interface LokiLoggerOptions {
  serviceName: string;
  environment: string;
  url?: string;
}
export class LokiLogger implements Logger {
  private winstonLogger: winston.Logger;
  constructor({ environment, serviceName, url }: LokiLoggerOptions) {
    this.winstonLogger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new LokiTransport({
          host: url,
          labels: { app: serviceName, env: environment },
          json: true,
        }),
      ],
      format: colorFormat,
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
  request(message: any): void {
    this.winstonLogger.info(message);
  }
  response(message: any): void {
    this.winstonLogger.http(message);
  }
}
