import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { LegacyLogger } from '../logger/legacy.logger';
import { SpecialLoggerService } from '../logger/special-logger.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [{ provide: LoggerService, useExisting: SpecialLoggerService }],
})
export class ChildComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.log('ChildComponent init');
  }
}
