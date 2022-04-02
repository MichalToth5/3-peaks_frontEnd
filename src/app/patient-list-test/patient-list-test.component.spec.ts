import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListTestComponent } from './patient-list-test.component';

describe('PatientListTestComponent', () => {
  let component: PatientListTestComponent;
  let fixture: ComponentFixture<PatientListTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientListTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
