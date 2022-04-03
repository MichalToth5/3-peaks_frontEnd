import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Patient} from "../../models/patient.model";
import {PatientService} from "../../patient.service";

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {

  form: FormGroup;
  constructor(private service:PatientService) {
    this.createPatientForm();
  }

  private createPatientForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      idNumber: new FormControl(null),
      dateOfBirth: new FormControl(null),
      sex: new FormControl(null),
      telephoneNumber: new FormControl(null),
      emailAddrs: new FormControl(null),
      insuranceCmp: new FormControl(null),
      street: new FormControl(null),
      houseNumber: new FormControl(null),
      postCode: new FormControl(null),
      city: new FormControl(null),
      country: new FormControl(null)
    });
  }

  private fillPatientForm(patient: Patient): void {
    this.form.controls['id'].setValue(patient.id);
    this.form.controls['firstName'].setValue(patient.firstName);
    this.form.controls['lastName'].setValue(patient.lastName);
    this.form.controls['idNumber'].setValue(patient.idNumber);
    this.form.controls['dateOfBirth'].setValue(patient.dateOfBirth);
    this.form.controls['sex'].setValue(patient.sex);
    this.form.controls['telephoneNumber'].setValue(patient.telephoneNumber);
    this.form.controls['emailAddrs'].setValue(patient.emailAddrs);
    this.form.controls['insuranceCmp'].setValue(patient.insuranceCmp);
    this.form.controls['street'].setValue(patient.street);
    this.form.controls['houseNumber'].setValue(patient.houseNumber);
    this.form.controls['postCode'].setValue(patient.postCode);
    this.form.controls['city'].setValue(patient.city);
    this.form.controls['country'].setValue(patient.country);
  }

  public addPatient(): void {
    this.service.addPatient(this.form.value).subscribe(data => {
      this.form.reset();
      alert("Udaje boli zapisane do databazy!")
    })
  }
}
