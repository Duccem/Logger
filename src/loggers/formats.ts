import * as winston from 'winston';
import { Levels } from '../types/Levels';
import { FormatDates } from '../types/DatesFormats';
import { RESET } from '../types/Constants';
export const colorFormat = winston.format.combine(
  winston.format.timestamp({ format: FormatDates.ISO }),
  winston.format.printf(({ level, message, timestamp }) => {
    return `${Levels[level]}[${level}] ${timestamp}${RESET} ${message}`;
  })
);

export const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: FormatDates.ISO }),
  winston.format.printf(({ level, message, timestamp }) => {
    return `[${level}] ${timestamp} ${message}`;
  })
);
