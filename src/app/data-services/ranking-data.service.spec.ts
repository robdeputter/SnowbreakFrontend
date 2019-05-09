import { TestBed } from '@angular/core/testing';

import { RankingDataService } from './ranking-data.service';

describe('RankingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RankingDataService = TestBed.get(RankingDataService);
    expect(service).toBeTruthy();
  });
});
