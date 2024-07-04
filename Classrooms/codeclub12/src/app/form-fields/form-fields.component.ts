import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { CardOutputComponent } from '../card-output/card-output.component';
import { differenceInYears, parseISO } from 'date-fns';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.scss'
})
export class FormFieldsComponent {
  personsDataForm: FormGroup;
  userData$: any;
  age$: any;

  constructor(private fb: FormBuilder) {
    this.personsDataForm = this.fb.group({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      favouriteColor: '',
      favouriteHobby: '',
      age: '',
    });
  }


  addData() {
    this.userData$ = this.personsDataForm.value;
    this.CalculateAge(this.userData$.dateOfBirth);
    }

    CalculateAge(dateOfBirth: string): number {
      const dob = parseISO(this.userData$.dateOfBirth);
      const currentDate = new Date();
      this.userData$.age = differenceInYears(currentDate, dob);
      console.log(this.userData$.age);
    
      return this.userData$.age;
    }

}
