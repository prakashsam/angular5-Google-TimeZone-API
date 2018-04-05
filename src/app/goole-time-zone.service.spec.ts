import { TestBed, inject } from '@angular/core/testing';

import { GooleTimeZoneService } from './goole-time-zone.service';

describe('GooleTimeZoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GooleTimeZoneService]
    });
  });

  it('should be created', inject([GooleTimeZoneService], (service: GooleTimeZoneService) => {
    expect(service).toBeTruthy();
  }));
});
