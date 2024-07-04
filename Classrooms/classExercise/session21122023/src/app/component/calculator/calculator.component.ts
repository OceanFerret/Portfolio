import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'] // Corrected property name
})



export class CalculatorComponent {
//   @Input() firstNumber: number = 0;
//input variables
  @Input() firstNumber: number = 0;
  @Input() secondNumber: number = 0;
result: number = 0;

  //adding function of calulator component
  addFunc(firstNumber: number, secondNumber: number): void {
    this.result = this.firstNumber + this.secondNumber;
  }
//subtracting function of calulator component
  subtractFunc(firstNumber: number, secondNumber: number): void {
    this.result = this.firstNumber - this.secondNumber;
  }
//multiplication function of calulator component
  multiplyFunc(firstNumber: number, secondNumber: number): void {
    this.result = this.firstNumber * this.secondNumber;
  }
//division function of calulator component
  divideFunc(firstNumber: number, secondNumber: number): void {
    if (secondNumber === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.result = this.firstNumber / this.secondNumber;
  }

}
