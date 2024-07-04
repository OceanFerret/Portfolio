import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardOutputComponent } from './card-output/card-output.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldsComponent,
    CardOutputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
