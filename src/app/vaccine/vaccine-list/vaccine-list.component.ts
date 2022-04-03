import {Component, Input, OnInit} from '@angular/core';
import {Vaccine} from "../../models/vaccine.model";
import {Router} from "@angular/router";
import {VaccineService} from "../../services/vaccine.service";

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.css']
})
export class VaccineListComponent implements OnInit{

  vaccines: Vaccine[] = [];
  constructor(private router:Router, private service:VaccineService) {}

  ngOnInit():void {
    this.service.getVaccines().subscribe(data => {
      this.vaccines = data;
    })
  }


}
