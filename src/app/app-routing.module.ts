import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PatientFormComponent} from "./patient/patient-form/patient-form.component";
import {PatientListComponent} from "./patient/patient-list/patient-list.component";
import {VaccineFormComponent} from "./vaccine/vaccine-form/vaccine-form.component";
import {VaccineListComponent} from "./vaccine/vaccine-list/vaccine-list.component";
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {PatientShotFormComponent} from "./patient/patient-shot-form/patient-shot-form.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path:"patient",
        component: PatientListComponent
      },
      {
        path:"patient/add",
        component: PatientFormComponent
      },
      {
        path:"patient/shot/add",
        component: PatientShotFormComponent
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
