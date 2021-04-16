import { Component, OnInit } from '@angular/core';
import { ParentService } from '../parent/parent.service';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css'],
})
export class GrandChildComponent implements OnInit {
  constructor(private parentService: ParentService) {}

  ngOnInit(): void {}

  get parentName(): string {
    return this.parentService.getName();
  }
}
