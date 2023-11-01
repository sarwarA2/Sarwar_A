import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckComponent } from './check/check.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { NgformComponent } from './ngform/ngform.component';
import { TdfvalidComponent } from './tdfvalid/tdfvalid.component'; '@angular/forms'



import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CheckComponent,
    FormComponent,
    NgformComponent,
  
    TdfvalidComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
  ]
})
export class DeshboardModule { }
