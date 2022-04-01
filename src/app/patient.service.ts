import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "./models/patient.model";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'http://localhost:8080/api/patient'
  constructor(private http : HttpClient) { }

  addPatient(patient:Patient) : Observable<Patient>{
    return this.http.post<Patient>(`${this.apiUrl}`, patient);
  }
  getPatients() : Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.apiUrl}`);
  }
  getPatientById(patientId:number) : Observable<Patient>{
    return this.http.get<Patient>(`${this.apiUrl}/${patientId}`);
  }
  updatePatientById(patientId:number, patient:Patient) : Observable<Patient>{
    return this.http.put<Patient>(`${this.apiUrl}/${patientId}`, patient);
  }
  deletePatientById(patientId:number) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${patientId}`);
  }
}
