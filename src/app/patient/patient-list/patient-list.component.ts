import {Component, Input} from '@angular/core';
import {Patient} from "../../models/patient.model";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {

  @Input()
  patients: Patient[] = [];

}
