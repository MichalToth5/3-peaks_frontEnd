import { Component } from '@angular/core';
import {Patient} from "../../models/patient.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent {

  patients: Patient[] = [];

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['']);
  }

  addPatient(patient: Patient): void {

  }

}
