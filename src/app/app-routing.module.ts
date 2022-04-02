import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {PatientPageComponent} from "./patient/patient-page/patient-page.component";
import {VaccinePageComponent} from "./vaccine/vaccine-page/vaccine-page.component";
import {PatientListTestComponent} from "./patient-list-test/patient-list-test.component";
import {PatientFormComponent} from "./patient/patient-form/patient-form.component";
import {PatientListComponent} from "./patient/patient-list/patient-list.component";



const routes: Routes = [
  {
    path:"patients",
    component: PatientListComponent
  },
  {
    path:"patients/add",
    component: PatientFormComponent
  },
  {
    path:"patients-test",
    component: PatientListTestComponent
  },
  {
    path: "vaccines",
    component: VaccinePageComponent
  },
  {
    path: '',
    component: PatientListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
