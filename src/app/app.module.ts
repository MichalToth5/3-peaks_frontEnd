import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientFormComponent } from './patient/patient-form/patient-form.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';

import { VaccineFormComponent } from './vaccine/vaccine-form/vaccine-form.component';
import { VaccineListComponent } from './vaccine/vaccine-list/vaccine-list.component';

import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    PatientListComponent,
    VaccineFormComponent,
    VaccineListComponent,
    AdminLayoutComponent,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
