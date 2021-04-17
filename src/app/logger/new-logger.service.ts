import { Inject, Injectable } from '@angular/core';
import { Logger } from './logger';
import { APP_REPORTER } from '../report.token';
import { Report } from '../report/report';

@Injectable({
  providedIn: 'root',
})
export class NewLoggerService implements Logger {
  prefix = 'newLogger';

  constructor(@Inject(APP_REPORTER) private reporters: ReadonlyArray<Report>) {}

  log(message: string): void {
    console.log(`${this.prefix} :  ${message}`);

    // this.reporters.forEach((reporter) => {
    //   reporter.report();
    // });
  }
}
