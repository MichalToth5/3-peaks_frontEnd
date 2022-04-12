import {Component, Input, OnInit} from '@angular/core';
import {Patient} from "../../models/patient.model";
import {Router} from "@angular/router";
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit{

  patients: Patient[] = [];
  searchAttr: string;
  constructor(private router:Router, private service:PatientService) { }

  ngOnInit(): void {
    this.service.getPatients().subscribe(data => {
      this.patients = data;
    })
  }
  displayPatient(patientId){
    this.router.navigate(['/admin/patient/add', {id:patientId}]);
  }

  search() {
    this.service.searchPatient(this.searchAttr ).subscribe(data => {
      this.patients = data;
    })
  }
}
