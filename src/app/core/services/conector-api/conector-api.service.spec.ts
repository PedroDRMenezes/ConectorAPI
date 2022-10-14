import { TestBed } from '@angular/core/testing';

import { ConectorApiService } from './conector-api.service';

describe('ConectorApiService', () => {
  let service: ConectorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
