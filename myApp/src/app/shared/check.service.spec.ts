import { TestBed, inject } from '@angular/core/testing';

import { CheckService } from './check.service';

describe('CheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckService]
    });
  });

  it('should ...', inject([CheckService], (service: CheckService) => {
    expect(service).toBeTruthy();
  }));
});
