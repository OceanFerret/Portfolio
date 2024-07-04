import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreStorageService {

  intCounter: number = 0;

  currentCounter$: ReplaySubject<number> = new ReplaySubject<number>(1);

  constructor() { }
  addFieldData(data: number) {
    this.intCounter = data;
    this.currentCounter$.next(this.intCounter);
    console.log(this.intCounter);
  }
}

