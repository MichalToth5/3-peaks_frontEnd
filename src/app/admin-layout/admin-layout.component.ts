import { Component, OnInit } from '@angular/core';
import {NcziService} from "../services/nczi.service";
import {Nczi} from "../models/nczi.model";
import {OAuthService} from "angular-oauth2-oidc";


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  vaccinations: Nczi;
  hospitalPatients: Nczi;
  positivePatients: Nczi
  constructor(private service:NcziService, private oauthservice: OAuthService) { }

  ngOnInit(): void {
    this.service.getVaccinations().subscribe(data =>{
      this.vaccinations = data;
    })
    this.service.getHospitalPatients().subscribe(data =>{
      this.hospitalPatients = data;
    })
    this.service.getPositives().subscribe(data =>{
      this.positivePatients = data;
    })
  }
  odhlasenie() {
    this.oauthservice.logOut();
    this.oauthservice.loadDiscoveryDocumentAndLogin();
  }
  prihlasenie() {
    this.oauthservice.loadDiscoveryDocumentAndLogin();
  }
}
