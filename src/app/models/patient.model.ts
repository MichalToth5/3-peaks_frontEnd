import {VaccineShot} from "./vaccine-shot.model";

export class Patient {
  id: number;
  firstName: string;
  lastName: string;
  idNumber: string;
  dateOfBirth: Date;
  sex: string;
  telephoneNumber: string;
  emailAddrs: string;
//  address: Address;
  insuranceCmp: string;
  street: string;
  houseNumber: string;
  postCode: string;
  city: string;
  country: string;
  vaccineShots: VaccineShot[];
  fullVaccinationSince: string;
}
