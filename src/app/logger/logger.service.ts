import { Injectable } from '@angular/core';
import { Logger } from './logger';
import { NewLoggerService } from './new-logger.service';

@Injectable({
  providedIn: 'root',
  useExisting: NewLoggerService,
})
export class LoggerService implements Logger {
  constructor() {}

  prefix = 'root';

  log(message: string): void {
    console.log(`${this.prefix} :  ${message}`);
  }
}
