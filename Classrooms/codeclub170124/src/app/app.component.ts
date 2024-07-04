import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AgButtonComponent } from "./component/ag-button/ag-button.component";
import { ManipulationComponent } from "./component/manipulation/manipulation.component";
import { CoreStorageService } from "./service/core-storage.service";
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, AgButtonComponent, ManipulationComponent, FormsModule]
})
export class AppComponent {

@Input() fieldInput: number = 0;

constructor(private coreStorageService: CoreStorageService, private router: Router) {

    this.fieldInput = coreStorageService.intCounter;
}

sendData() {
  this.coreStorageService.addFieldData(this.fieldInput);
  console.log(this.fieldInput);
  this.router.navigate(['/manipulation']);
}
}

//   //firstField: number;
//   //secondField: number;

// intCounter: number = 0;
// Multiply() {
// this.intCounter = this.intCounter * this.intCounter;

// }
// clearInput() {
// this.intCounter = 0;
// }
// decreaseInput() {
// this.intCounter--;
// }
// increaseInput() {
//  this.intCounter++;
// }
//   title = 'codeclub170124';
// }