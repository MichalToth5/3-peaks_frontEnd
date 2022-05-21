import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd3Peaks';

  constructor(private ahoj: OAuthService) { }

  prihlasenie() {
    this.ahoj.loadDiscoveryDocumentAndLogin();
  }

  odhlasenie() {
    this.ahoj.logOut();
  }
}
