import { Injectable } from '@angular/core';
import { FormFieldsComponent } from './form-fields/form-fields.component';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  data: FormData | undefined;
  constructor(private formFields: FormFieldsComponent) { }

  addData(){
    
  }

}
