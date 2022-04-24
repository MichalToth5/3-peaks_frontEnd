import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientShotFormComponent } from './patient-shot-form.component';

describe('PatientShotFormComponent', () => {
  let component: PatientShotFormComponent;
  let fixture: ComponentFixture<PatientShotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientShotFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientShotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
