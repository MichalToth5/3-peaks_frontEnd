import { Component } from '@angular/core';
import {Vaccine} from "../../models/vaccine.model";
import {Router} from "@angular/router";
import {VaccineService} from "../../vaccine.service";

@Component({
  selector: 'app-vaccine-page',
  templateUrl: './vaccine-page.component.html',
  styleUrls: ['./vaccine-page.component.css']
})
export class VaccinePageComponent {

  vaccines:Vaccine[] = [];
  constructor(private router: Router, private service:VaccineService) { }

  goBack(): void {
    this.router.navigate(['']);
  }
  refreshList() : void{
    this.service.getVaccines().subscribe(data => this.vaccines = data)
  }
  addVaccine(vaccine: Vaccine): void {
    this.service.addVaccine(vaccine).subscribe(data => this.refreshList())
  }

}
