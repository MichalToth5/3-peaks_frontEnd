import { Component } from '@angular/core';
import {Patient} from "../../models/patient.model";
import {Router} from "@angular/router";
import {PatientService} from "../../patient.service";

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent {

  patients:Patient[] = [];
  constructor(private router:Router, private service:PatientService) { }

  goBack(): void{
    this.router.navigate(['']);
  }
  refreshList() : void{
    this.service.getPatients().subscribe(data => this.patients = data)
  }
  addPatient(patient: Patient): void {
    this.service.addPatient(patient).subscribe(data => this.refreshList())
  }

}
