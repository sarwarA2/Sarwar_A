import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckComponent } from './deshboard/check/check.component';
import { FormComponent } from './deshboard/form/form.component';
import { NgformComponent } from './deshboard/ngform/ngform.component';
import { TdfvalidComponent } from './deshboard/tdfvalid/tdfvalid.component';

const routes: Routes = [
  {
    path: "tdfvalid",
    component: TdfvalidComponent
  
  },
  {
    path: "check",
    component: CheckComponent
  },
  {
    path: "form",
    component: FormComponent
  },
  {
    path: "ngform",
    component: NgformComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
