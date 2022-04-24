import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Patient} from "../../models/patient.model";
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {VaccineShot} from "../../models/vaccine-shot.model";

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit, OnDestroy {
  patient:Patient;
  id:string;
  form: FormGroup;
  vaccineShots: VaccineShot[];

  private subscription: Subscription = new Subscription();

  constructor(private service:PatientService, private route:ActivatedRoute, private router: Router) {
    this.createPatientForm();
  }
  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id');
   if(this.id != null){
     this.subscription.add(this.service.getPatientById(parseInt(this.id)).subscribe(data => {
       this.vaccineShots = data.vaccineShots;
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
      alert("Údaje boli úspešne zapísané do databázy!");
      this.router.navigate(['/admin/patient/add', {id:data.id}]);
    })
  }
  public updatePatient(): void {
    this.service.updatePatientById(parseInt(this.id), this.form.value).subscribe(data => {
      alert("Údaje boli úspešne zmenené!")
    })
  }

  public deletePatient(): void {
    this.service.deletePatientById(parseInt(this.id)).subscribe(data =>{
      this.router.navigate(["/admin/patient"]);
      alert("Odstránili ste pacienta: " + this.form.value.idNumber+ ", " + this.form.value.firstName +" "+ this.form.value.lastName)
    })

  }

  public addVaccineShot(): void {
    this.router.navigate(['/admin/patient/shot/add', {patientId:this.id}]);
  }

  public editVaccineShot(id: number): void {
    this.router.navigate(['/admin/patient/shot/add', {id:id,patientId:this.id}]);

  }
}
