import { Injectable } from '@angular/core';
import { Report } from '../report';

@Injectable({
  providedIn: 'root',
})
export class BrowserReporterService implements Report {
  constructor() {}

  report(): void {
    console.log('Browser report');
  }
}
