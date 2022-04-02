import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vaccine} from "../../models/vaccine.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-vaccine-form',
  templateUrl: './vaccine-form.component.html',
  styleUrls: ['./vaccine-form.component.css']
})
export class VaccineFormComponent {

  @Input()
  set vaccine(data: Vaccine) {
    if (data) {
      this.fillVaccineForm(data);
    }
  }

  @Output()
  addNewVaccine = new EventEmitter<Vaccine>();

  form: FormGroup;

  constructor() {
    this.createVaccineForm();
  }

  private createVaccineForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      type: new FormControl(null),
      manufacturer: new FormControl(null),
      nextShotInDays: new FormControl(null),
      minAge: new FormControl(null),
      maxAge: new FormControl(null)
    });
  }

  private fillVaccineForm(vaccine: Vaccine): void {
    this.form.controls['id'].setValue(vaccine.id);
    this.form.controls['name'].setValue(vaccine.name);
    this.form.controls['type'].setValue(vaccine.type);
    this.form.controls['manufacturer'].setValue(vaccine.manufacturer);
    this.form.controls['naxtShotInDays'].setValue(vaccine.nextShotInDays);
    this.form.controls['minAge'].setValue(vaccine.minAge);
    this.form.controls['maxAge'].setValue(vaccine.maxAge);
  }

  public addVaccine(): void {
    this.addNewVaccine.emit(this.form.value);
    this.form.reset();
  }
}
