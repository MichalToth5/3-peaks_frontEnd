import { TestBed } from '@angular/core/testing';

import { VaccineShotService } from './vaccine-shot.service';

describe('VaccineShotService', () => {
  let service: VaccineShotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccineShotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
