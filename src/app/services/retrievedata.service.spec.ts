import { TestBed } from '@angular/core/testing';

import { RetrievedataService } from './retrievedata.service';

describe('RetrievedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrievedataService = TestBed.get(RetrievedataService);
    expect(service).toBeTruthy();
  });
});
