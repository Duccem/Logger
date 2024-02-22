import * as winston from 'winston';
import { LevelColors } from '../types/Levels';
import { FormatDates } from '../types/DatesFormats';
import { RESET } from '../types/Constants';
export const format = (dateFormat?: FormatDates, isFile?: boolean) => {
  return winston.format.combine(
    winston.format.timestamp({ format: dateFormat ? dateFormat : FormatDates.ISO }),
    winston.format.printf(({ level, message, timestamp }) => {
      if (isFile) return `[${level}] ${timestamp} ${message}`;
      return `${LevelColors[level]}[${level}] ${timestamp}${RESET} ${message}`;
    })
  );
};
