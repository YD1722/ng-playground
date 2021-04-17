import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class SpecialLoggerService implements Logger {
  prefix = 'specialLogger';

  log(message: string): void {
    console.log(`${this.prefix}: ${message}`);
  }
}
