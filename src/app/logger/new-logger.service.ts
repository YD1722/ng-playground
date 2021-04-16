import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class NewLoggerService implements Logger {
  prefix = 'new-logger';

  constructor() {}

  log(message: string): void {
    console.log(`${this.prefix} :  ${message}`);
  }
}
