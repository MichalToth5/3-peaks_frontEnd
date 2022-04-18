import { Component, OnInit } from '@angular/core';
import {NcziService} from "../services/nczi.service";
import {Nczi} from "../models/nczi.model";


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  vaccinations: Nczi;
  constructor(private service:NcziService) { }

  ngOnInit(): void {
    this.service.getVaccinations().subscribe(data =>{
      this.vaccinations = data;
    })
  }

}
