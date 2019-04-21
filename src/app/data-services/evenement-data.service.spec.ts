import { TestBed } from '@angular/core/testing';

import { EvenementDataService } from '../data-services/evenement-data.service';

describe('EvenementDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvenementDataService = TestBed.get(EvenementDataService);
    expect(service).toBeTruthy();
  });
});
