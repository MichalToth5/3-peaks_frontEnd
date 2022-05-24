import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {timeout} from "rxjs";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private oauthservice: OAuthService) { }


  ngOnInit(): void {
    this.oauthservice.loadDiscoveryDocumentAndLogin();
  }

}
