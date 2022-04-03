import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {PatientPageComponent} from "./patient/patient-page/patient-page.component";
import {VaccinePageComponent} from "./vaccine/vaccine-page/vaccine-page.component";
import {PatientListTestComponent} from "./patient-list-test/patient-list-test.component";
import {PatientFormComponent} from "./patient/patient-form/patient-form.component";
import {PatientListComponent} from "./patient/patient-list/patient-list.component";
import {VaccineFormComponent} from "./vaccine/vaccine-form/vaccine-form.component";
import {VaccineListComponent} from "./vaccine/vaccine-list/vaccine-list.component";



const routes: Routes = [
  {
    path:"patient",
    component: PatientListComponent
  },
  {
    path:"patient/add",
    component: PatientFormComponent
  },
  {
    path: "vaccine",
    component: VaccineListComponent
  },
  {
    path:"vaccine/add",
    component: VaccineFormComponent
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
