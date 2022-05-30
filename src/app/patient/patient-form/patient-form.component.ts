import {Component, EventEmitter, Injectable, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Patient} from "../../models/patient.model";
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {VaccineShot} from "../../models/vaccine-shot.model";
import Swal from  'sweetalert2'
import {NgbDateParserFormatter, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";


@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '.';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
  providers: [
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class PatientFormComponent implements OnInit, OnDestroy {

  patient:Patient;
  id:string;
  form: FormGroup;
  vaccineShots: VaccineShot[];
  private customDateParserFormatter: CustomDateParserFormatter;

  private subscription: Subscription = new Subscription();

  constructor(private service:PatientService, private route:ActivatedRoute, private router: Router) {
    this.createPatientForm();
    this.customDateParserFormatter = new CustomDateParserFormatter();
  }
  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id');
   if(this.id != null){
     this.subscription.add(this.service.getPatientById(parseInt(this.id)).subscribe(data => {
       this.vaccineShots = data.vaccineShots;

       this.form.patchValue({
         ...data,
         dateOfBirth: this.customDateParserFormatter.parse(data.dateOfBirth)
       });
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
    this.service.addPatient({
      ...this.form.value,
      dateOfBirth: this.customDateParserFormatter.format(this.form.value.dateOfBirth)
    }).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Pacient bol úspešne pridaný!',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['/admin/patient/add', {id:data.id}]);
    }, error => {
      let message  = ""
      for (let errorMessage of Object.values(error.error)){
        message = message + errorMessage + "\n"
      }
      Swal.fire({
        icon: 'warning',
        title: message,
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public updatePatient(): void {
    this.service.updatePatientById(parseInt(this.id), {
      ...this.form.value,
      dateOfBirth: this.customDateParserFormatter.format(this.form.value.dateOfBirth)
    }).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Údaje boli úspešne zmenené!',
        showConfirmButton: false,
        timer: 3000
      })
    }, error => {
      let message  = ""
      for (let errorMessage of Object.values(error.error)){
        message = message + errorMessage + "\n"
      }
      Swal.fire({
        icon: 'warning',
        title: message,
        showConfirmButton: false,
        timer: 3000
      })
    })
  }

  public deletePatient(): void {
    this.service.deletePatientById(parseInt(this.id)).subscribe(data =>{
      this.router.navigate(["/admin/patient"]);
      Swal.fire({
        icon: 'success',
        title: "Odstránili ste pacienta: " + this.form.value.idNumber+ ", " + this.form.value.firstName +" "+ this.form.value.lastName,
        showConfirmButton: false,
        timer: 3000
      })
    })

  }

  public addVaccineShot(): void {
    this.router.navigate(['/admin/patient/shot/add', {patientId:this.id}]);
  }

  public editVaccineShot(id: number): void {
    this.router.navigate(['/admin/patient/shot/add', {id:id,patientId:this.id}]);

  }
  public goBack() {
    this.router.navigate(['/admin/patient'])

  }
}
