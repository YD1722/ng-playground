import { Component, OnInit } from '@angular/core';
import { ParentService } from '../parent/parent.service';
import { LoggerService } from '../logger/logger.service';
import { SpecialLoggerService } from '../logger/special-logger.service';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css'],
  viewProviders: [
    { provide: LoggerService, useExisting: SpecialLoggerService },
  ],
  // providers: [{ provide: LoggerService, useExisting: SpecialLoggerService }],
})
export class GrandChildComponent implements OnInit {
  constructor(
    private parentService: ParentService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.loggerService.log('GrandChildComponent init');
  }

  get parentName(): string {
    return this.parentService.getName();
  }
}
