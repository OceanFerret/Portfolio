import { Component } from '@angular/core';
import { FormFieldsComponent } from '../form-fields/form-fields.component';

@Component({
  selector: 'app-card-output',
  templateUrl: './card-output.component.html',
  styleUrl: './card-output.component.scss'
})
export class CardOutputComponent {
  userData: any;

  constructor(private formFields: FormFieldsComponent){
    this.userData = this.formFields.userData$;
  }

}
