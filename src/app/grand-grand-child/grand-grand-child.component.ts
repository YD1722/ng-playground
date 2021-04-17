import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Component({
  selector: 'app-grand-grand-child',
  templateUrl: './grand-grand-child.component.html',
  styleUrls: ['./grand-grand-child.component.css'],
})
export class GrandGrandChildComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.log('GrandGrandChildComponent init');
  }
}
