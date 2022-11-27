import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../models/patient.model";
import {Observable} from "rxjs";
import {Vaccine} from "../models/vaccine.model";

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  private apiUrl = 'http://localhost/api/vaccine'
  constructor(private http:HttpClient) { }

  addVaccine(vaccine:Vaccine) : Observable<Vaccine>{
    return this.http.post<Vaccine>(`${this.apiUrl}`, vaccine);
  }
  getVaccines() : Observable<Vaccine[]>{
    return this.http.get<Vaccine[]>(`${this.apiUrl}`);
  }
  getVaccineById(vaccineId:number) : Observable<Vaccine>{
    return this.http.get<Vaccine>(`${this.apiUrl}/${vaccineId}`);
  }
  updateVaccineById(vaccineId:number, vaccine:Vaccine) : Observable<Vaccine>{
    return this.http.put<Vaccine>(`${this.apiUrl}/${vaccineId}`, vaccine);
  }
  deleteVaccineById(vaccineId:number) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${vaccineId}`);
  }



}



