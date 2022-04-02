import { Component } from '@angular/core';
import {Vaccine} from "../../models/vaccine.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vaccine-page',
  templateUrl: './vaccine-page.component.html',
  styleUrls: ['./vaccine-page.component.css']
})
export class VaccinePageComponent {

  vaccines: Vaccine[] = [];

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['']);
  }

  addVaccine(vaccine: Vaccine): void {

  }

}
