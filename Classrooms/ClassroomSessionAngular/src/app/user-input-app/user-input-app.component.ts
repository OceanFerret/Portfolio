import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input-app',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-input-app.component.html',
  styleUrl: './user-input-app.component.scss'
})
export class UserInputAppComponent implements OnInit {
  formGroup!: FormGroup;
  generatedString!: String;

constructor(private formBuilder: FormBuilder,){}

ngOnInit(): void{
  this.formGroup = this.formBuilder.group({
    first: '',
    second: '',
    symbol: [false]
  });

  // ngOnInit(): void{
  //   this.formGroup = this.formBuilder.group({
  //     first: ['', [Validators.required, this.noSpacesValidator]],
  //     second: ['', [Validators.required, this.noSpacesValidator]],
  //     symbol: [false]
  //   });
}

generateString() {
  const first = this.formGroup.get('first')!.value.toLowerCase();
  const second = this.formGroup.get('second')!.value.toLowerCase();
  const addSymbol = this.formGroup.get('symbol')!.value;
  const randomNumber = Math.floor(Math.random() * 9) +1;
  this.generatedString = `${first}_${second}_${randomNumber}`;

  if (addSymbol) {
    const symbols = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '?'];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    this.generatedString += randomSymbol; 
  }

  this.generatedString = this.generatedString;
}

onSubmit() {
    console.log('Submit', this.formGroup.value)
}
}

