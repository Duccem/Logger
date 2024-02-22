import { FormatDates } from './DatesFormats';
import { Levels } from './Levels';

export interface Logger {
  log(message: any): void;
  error(message: any): void;
  warn(message: any): void;
  debug(message: any): void;
  verbose(message: any): void;
  http(message: any): void;
}

export interface LoggerOptions {
  dateFormat?: FormatDates;
  level?: Levels;
}
