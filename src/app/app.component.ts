import { Component } from '@angular/core';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private loggerService: LoggerService) {
    this.loggerService.log('AppComponent init');
  }
}
