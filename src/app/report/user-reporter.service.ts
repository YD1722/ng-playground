import { Injectable } from '@angular/core';
import { Report } from './report';

@Injectable({
  providedIn: 'root',
})
export class UserReporterService implements Report {
  constructor() {}

  report(): void {
    console.log('User Report');
  }
}
