import { Component } from '@angular/core';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { NewLoggerService } from './logger/new-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private loggerService: LoggerService,
    private newLoggerService: NewLoggerService
  ) {
    this.loggerService.log('AppComponent init');

    console.log(
      `AppComponent : is same memory location : ${
        this.loggerService === this.newLoggerService
      }`
    );
  }
}
