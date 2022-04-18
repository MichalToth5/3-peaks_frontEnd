import { TestBed } from '@angular/core/testing';

import { NcziService } from './nczi.service';

describe('AdminService', () => {
  let service: NcziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NcziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
