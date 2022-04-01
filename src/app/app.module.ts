import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientFormComponent } from './patient/patient-form/patient-form.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientPageComponent } from './patient/patient-page/patient-page.component';
import { VaccineFormComponent } from './vaccine/vaccine-form/vaccine-form.component';
import { VaccineListComponent } from './vaccine/vaccine-list/vaccine-list.component';
import { VaccinePageComponent } from './vaccine/vaccine-page/vaccine-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MainMenuComponent } from './mainMenu/main-menu/main-menu.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    PatientListComponent,
    PatientPageComponent,
    VaccineFormComponent,
    VaccineListComponent,
    VaccinePageComponent,
    MainMenuComponent
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
