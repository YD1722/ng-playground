import { Injectable } from '@angular/core';

@Injectable()
export class ParentService {
  constructor() {}

  getName(): string {
    return 'This is from parent service';
  }
}
