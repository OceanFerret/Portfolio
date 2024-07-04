import { Component } from '@angular/core';
import { AgButtonComponent } from "../ag-button/ag-button.component";
import { CoreStorageService } from '../../service/core-storage.service';

@Component({
    selector: 'app-manipulation',
    standalone: true,
    templateUrl: './manipulation.component.html',
    styleUrl: './manipulation.component.scss',
    imports: [AgButtonComponent]
})
export class ManipulationComponent {
displayData: Number = 0;

    //firstField: number;
  //secondField: number;
constructor(private CoreStorageService: CoreStorageService) {
  this.CoreStorageService.currentCounter$
  .subscribe(data => {
      this.displayData = data
});
}


Multiply() {
this.CoreStorageService.intCounter = this.CoreStorageService.intCounter * this.CoreStorageService.intCounter;
this.displayData = this.CoreStorageService.intCounter;
}
clearInput() {
this.CoreStorageService.intCounter = 0;
this.displayData = this.CoreStorageService.intCounter;
}
decreaseInput() {
this.CoreStorageService.intCounter--;
this.displayData = this.CoreStorageService.intCounter;
}
increaseInput() {
this.CoreStorageService.intCounter++;
this.displayData = this.CoreStorageService.intCounter;
}
  title = 'codeclub170124';
}
