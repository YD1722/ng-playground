import { Component, OnInit } from '@angular/core';
import { ParentService } from './parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [ParentService],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
