import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VaccineShot} from "../models/vaccine-shot.model";

@Injectable({
  providedIn: 'root'
})
export class VaccineShotService {
  private apiUrl = 'http://localhost/api/shot'
  constructor(private http : HttpClient) { }

  addVaccineShot(vaccineShot:VaccineShot) : Observable<VaccineShot>{
    return this.http.post<VaccineShot>(`${this.apiUrl}`, vaccineShot);
  }

  getVaccineShotById(id: number) : Observable<VaccineShot> {
    return this.http.get<VaccineShot>(`${this.apiUrl}/${id}`);
  }

  updateVaccineShot(id: number, vaccineShot:VaccineShot) : Observable<VaccineShot>{
    return this.http.put<VaccineShot>(`${this.apiUrl}/${id}`, vaccineShot);
  }

  deleteVaccineShot(id: number) : Observable<VaccineShot>{
    return this.http.delete<VaccineShot>(`${this.apiUrl}/${id}`);
  }
}
