export interface Logger {
  log(message: any): void;
  error(message: any): void;
  warn(message: any): void;
  debug(message: any): void;
  verbose(message: any): void;
  request(message: any): void;
  response(message: any): void;
}
