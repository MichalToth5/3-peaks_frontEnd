import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vaccine} from "../../models/vaccine.model";
import {FormControl, FormGroup} from "@angular/forms";
import {VaccineService} from "../../services/vaccine.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vaccine-form',
  templateUrl: './vaccine-form.component.html',
  styleUrls: ['./vaccine-form.component.css']
})
export class VaccineFormComponent implements OnInit{
  id:string;
  form: FormGroup;
  constructor(private service:VaccineService, private router:ActivatedRoute) {
    this.createVaccineForm();
  }
  ngOnInit():void{
    this.id = this.router.snapshot.paramMap.get('id');
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
      alert("Udaje boli zapisane do databazy!")
    });
  }

  public updateVaccine():void{
    this.service.updateVaccineById(parseInt(this.id), this.form.value).subscribe(data => {
      alert("Udaje boli uspesne zmenene!")
    })
  }
}
