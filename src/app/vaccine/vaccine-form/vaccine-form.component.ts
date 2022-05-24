import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vaccine} from "../../models/vaccine.model";
import {FormControl, FormGroup} from "@angular/forms";
import {VaccineService} from "../../services/vaccine.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from  'sweetalert2'

@Component({
  selector: 'app-vaccine-form',
  templateUrl: './vaccine-form.component.html',
  styleUrls: ['./vaccine-form.component.css']
})
export class VaccineFormComponent implements OnInit{
  id:string;
  form: FormGroup;
  constructor(private service:VaccineService, private route:ActivatedRoute, private router: Router) {
    this.createVaccineForm();
  }
  ngOnInit():void{
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != null){
      this.service.getVaccineById(parseInt(this.id)).subscribe(data => {
        this.form.patchValue(data);
      })
    }
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

  public addVaccine(): void {
    this.service.addVaccine(this.form.value).subscribe(data => {
      this.form.reset();
      Swal.fire({
        icon: 'success',
        title: 'Vakcína bola úspešne pridaná!',
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
    });
  }

  public updateVaccine():void{
    this.service.updateVaccineById(parseInt(this.id), this.form.value).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Údaje boli úspešne zmenené!',
        showConfirmButton: false,
        timer: 3000
      })
    })
  }

  public deleteVaccine():void {
    this.service.deleteVaccineById(parseInt(this.id)).subscribe(data =>{
      this.router.navigate(["/admin/vaccine"]);
      Swal.fire({
        icon: 'success',
        title: "Odstránili ste vakcínu: " + this.form.value.name,
        showConfirmButton: false,
        timer: 3000
      })
    })
  }

  public goBack() {
    this.router.navigate(['/admin/vaccine'])
  }
}
