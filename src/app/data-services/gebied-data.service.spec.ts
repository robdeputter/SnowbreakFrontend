import { TestBed } from '@angular/core/testing';

import { GebiedDataService } from './gebied-data.service';

describe('GebiedDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GebiedDataService = TestBed.get(GebiedDataService);
    expect(service).toBeTruthy();
  });
});
