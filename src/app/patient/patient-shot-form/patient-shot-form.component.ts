import {Component, OnDestroy, OnInit} from '@angular/core';
import {Patient} from "../../models/patient.model";
import {Subscription} from "rxjs";
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {VaccineService} from "../../services/vaccine.service";
import {Vaccine} from "../../models/vaccine.model";
import {FormControl, FormGroup} from "@angular/forms";
import {VaccineShotService} from "../../services/vaccine-shot.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-patient-shot-form',
  templateUrl: './patient-shot-form.component.html',
  styleUrls: ['./patient-shot-form.component.css']
})
export class PatientShotFormComponent implements OnInit, OnDestroy {
  id?: number;
  patient?: Patient;
  vaccines?: Vaccine[];
  form: FormGroup;
  private subscriptions: Subscription = new Subscription();

  private createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      batch: new FormControl(null),
      doctor: new FormControl(null),
      dateOfShot: new FormControl(null),
      idVaccine: new FormControl(null)
    });
  }

  constructor(private vaccineShotService:VaccineShotService, private patientService:PatientService, private vaccineService:VaccineService, private route:ActivatedRoute, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')) || null;
    const patientId = parseInt(this.route.snapshot.paramMap.get('patientId'));
    const nowDate = new Date();
    if (this.id == undefined) {
      this.form.patchValue({
        dateOfShot: "" + nowDate.getDate() + "." + (nowDate.getMonth()+1) + "." + nowDate.getFullYear()
      });
    }
    this.subscriptions.add(this.vaccineService.getVaccines().subscribe(data => {
      this.vaccines = data;

      this.subscriptions.add(this.patientService.getPatientById(patientId).subscribe(data => {
        this.patient = data;
        if (this.id !== null) {
          this.subscriptions.add(this.vaccineShotService.getVaccineShotById(this.id).subscribe(data => {
            this.form.patchValue(data);
          }));
        }
      }));

    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public addVacineShot(): void {
    this.vaccineShotService.addVaccineShot({...this.form.value, idPatient: this.patient.id}).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Zápis o očkovaní bol pridaný!',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['/admin/patient/shot/add', {id:data.id,patientId:this.patient.id}]);
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

  public updateVaccineShot(): void {
    this.vaccineShotService.updateVaccineShot(this.id, {
      ...this.form.value,
      idPatient: this.patient.id
    }).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Zápis o očkovaní bol upravený!',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public deleteVaccineShot(): void {
    this.vaccineShotService.deleteVaccineShot(this.id).subscribe(data =>{
      Swal.fire({
        icon: 'success',
        title: 'Zápis o očkovaní bol odstránený!',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(["/admin/patient/add", {id: this.patient.id}]);
    })
  }

  public backButton(): void {
    this.router.navigate(["/admin/patient/add", {id: this.patient.id}]);
  }

}
