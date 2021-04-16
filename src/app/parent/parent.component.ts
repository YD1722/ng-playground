import { Component, OnInit, Self } from '@angular/core';
import { ParentService } from './parent.service';
import { LoggerService } from '../logger/logger.service';
import { NewLoggerService } from '../logger/new-logger.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [
    ParentService,
    { provide: LoggerService, useClass: NewLoggerService },
  ],
})
export class ParentComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.log('parentComponent init');
  }
}
