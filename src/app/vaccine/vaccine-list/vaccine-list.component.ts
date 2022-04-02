import {Component, Input} from '@angular/core';
import {Vaccine} from "../../models/vaccine.model";

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.css']
})
export class VaccineListComponent {

  @Input()
  vaccines: Vaccine[] = [];

}
