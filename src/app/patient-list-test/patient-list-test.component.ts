import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PatientService} from "../patient.service";
import {Patient} from "../models/patient.model";

@Component({
  selector: 'app-patient-list-test',
  templateUrl: './patient-list-test.component.html',
  styleUrls: ['./patient-list-test.component.css']
})
export class PatientListTestComponent implements OnInit {

  patients:Patient[] = []

  constructor(private router:Router, private service:PatientService) { }

  ngOnInit(): void {
    this.service.getPatients().subscribe(data => {
      this.patients = data;
    })
  }





}
