import { Component, Injector } from '@angular/core';
import { LoggerService } from './logger/logger.service';
import { NewLoggerService } from './logger/new-logger.service';
import { APP_CONFIG } from './config.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: LoggerService,
      useFactory: (injector: Injector) => {
        return injector.get(APP_CONFIG).newLoggerEnabled
          ? injector.get(NewLoggerService)
          : injector.get(LoggerService);
      },
      deps: [Injector],
    },
  ],
})
export class AppComponent {
  constructor(
    private loggerService: LoggerService,
    private newLoggerService: NewLoggerService
  ) {
    this.loggerService.log('AppComponent init');

    // console.log(
    //   `AppComponent : is same memory location : ${
    //     this.loggerService === this.newLoggerService
    //   }`
    // );
  }
}
