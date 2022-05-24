import {Component, Input, OnInit} from '@angular/core';
import {Patient} from "../../models/patient.model";
import {Router} from "@angular/router";
import {PatientService} from "../../services/patient.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  private sub: Subscription = new Subscription();
  patients: Patient[] = [];
  searchAttr: string;
  currentPage: number = 0;
  pagination: number[];
  pageCount: number = 0;

  constructor(private router: Router, private service: PatientService) {
  }

  ngOnInit(): void {
    this.refreshPatients();
    this.getPageCount();
  }

  refreshPatients():void{
    this.sub.add(
      this.service.getPatients(this.currentPage).subscribe(data => {
      this.patients = data;
      this.refreshPaginator();
    }))
  }

  displayPatient(patientId) {
    this.router.navigate(['/admin/patient/add', {id: patientId}]);
  }

  search() {
    if(this.searchAttr === ""){
      this.refreshPatients();
    } else {
      this.sub.add(
        this.service.searchPatient(this.searchAttr).subscribe(data => {
          this.patients = data;
        }))
    }
  }

  getPageCount(): void {
    this.sub.add(
      this.service.getPageCount().subscribe(data => {
      this.pageCount = data.pageCount;
      this.refreshPaginator();
    }));
  }

  changePage(page: number) {
    this.currentPage = page;
    this.refreshPatients();

  }

  refreshPaginator() {
    this.pagination = [];
    this.pagination.push(0);
    this.pagination.push(1);
    for (let p = this.currentPage - 2; p <= this.currentPage + 2; p++) {
      if (p < 2) continue;
      if (p >= this.pageCount - 2) continue;
      if (p === this.currentPage - 2 && p !== 2) {
        this.pagination.push(-1);
      }
      this.pagination.push(p);
      if (p === this.currentPage + 2 && p !== this.pageCount - 3) {
        this.pagination.push(-1);
      }
      this.pagination.push(this.pageCount - 2);
      this.pagination.push(this.pageCount - 1);
    }
  }
}

