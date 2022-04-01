import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from "./mainMenu/main-menu/main-menu.component";
import {PatientPageComponent} from "./patient/patient-page/patient-page.component";
import {VaccinePageComponent} from "./vaccine/vaccine-page/vaccine-page.component";

const routes: Routes = [
  {
    path:"patients",
    component: PatientPageComponent
  },
  {
    path: "vaccines",
    component: VaccinePageComponent
  },
  {
    path: '',
    component: MainMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
