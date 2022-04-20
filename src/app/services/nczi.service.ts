// includes API NCZI
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Nczi} from "../models/nczi.model";

@Injectable({
  providedIn: 'root'
})
export class NcziService {

  private apiUrl = 'http://localhost:8080/api/nczi/vaccinations'
  private apiUrl1 = 'http://localhost:8080/api/nczi/hospital-patients'
  private apiUrl2 = 'http://localhost:8080/api/nczi/ag-tests'
  constructor(private http:HttpClient) { }

  getVaccinations() : Observable<Nczi>{
    return this.http.get<Nczi>(`${this.apiUrl}`);
  }

  getHospitalPatients() : Observable<Nczi>{
    return this.http.get<Nczi>(`${this.apiUrl1}`);
  }

  getPositives() : Observable<Nczi>{
    return this.http.get<Nczi>(`${this.apiUrl2}`);
  }



}

