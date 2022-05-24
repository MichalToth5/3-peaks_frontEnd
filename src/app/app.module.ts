import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PatientFormComponent } from './patient/patient-form/patient-form.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { VaccineFormComponent } from './vaccine/vaccine-form/vaccine-form.component';
import { VaccineListComponent } from './vaccine/vaccine-list/vaccine-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { PatientShotFormComponent } from './patient/patient-shot-form/patient-shot-form.component';
import {NullValidationHandler, OAuthModule, OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "./AuthConfig";
import {RouterModule} from "@angular/router";
import {AuthInterceptor} from "./AuthInterceptor";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InformationsComponent } from './informations/informations.component';

function init_app(oauthService: OAuthService) {
  return () => configureWithNewConfigApi(oauthService);
}
function configureWithNewConfigApi(oauthService: OAuthService) {
  oauthService.configure(authCodeFlowConfig);
  oauthService.tokenValidationHandler = new NullValidationHandler();
  oauthService.setupAutomaticSilentRefresh();
  oauthService.events.subscribe(e => { });
  return oauthService.loadDiscoveryDocumentAndTryLogin();
}

@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    PatientListComponent,
    VaccineFormComponent,
    VaccineListComponent,
    AdminLayoutComponent,
    PatientShotFormComponent,
    LandingPageComponent,
    InformationsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [
        OAuthService
      ],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
