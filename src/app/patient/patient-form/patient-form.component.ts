import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Patient} from "../../models/patient.model";
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit, OnDestroy {
  patient:Patient;
  id:string;
  form: FormGroup;

  private subscription: Subscription = new Subscription();

  constructor(private service:PatientService, private route:ActivatedRoute, private router: Router) {
    this.createPatientForm();
  }
  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id');
   if(this.id != null){
     this.subscription.add(this.service.getPatientById(parseInt(this.id)).subscribe(data => {
       this.form.patchValue(data);
     }));
   }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
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
      insurance: new FormControl(null),
      street: new FormControl(null),
      houseNumber: new FormControl(null),
      postCode: new FormControl(null),
      city: new FormControl(null),
      country: new FormControl(null)
    });
  }

  public addPatient(): void {
    this.service.addPatient(this.form.value).subscribe(data => {
      this.form.reset();
      alert("Udaje boli zapisane do databazy!")
    })
  }
  public updatePatient(): void {
    this.service.updatePatientById(parseInt(this.id), this.form.value).subscribe(data => {
      alert("Udaje boli uspesne zmenene!")
    })
  }

  public deletePatient(): void {
    this.service.deletePatientById(parseInt(this.id)).subscribe(data =>{
      this.router.navigate(["/admin/patient"]);
      alert("Odstranili ste pacienta: " + this.form.value.idNumber+ ", " + this.form.value.firstName +" "+ this.form.value.lastName)
    })

  }
}
