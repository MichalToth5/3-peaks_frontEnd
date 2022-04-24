import {Vaccine} from "./vaccine.model";

export class VaccineShot {
  batch: string;
  dateOfShot: string;
  doctor: string;
  id: number;
  idPatient: number;
  idVaccine: number;
  shotNumber: number;
  vaccine?: Vaccine;
}
