import { TestBed } from '@angular/core/testing';

import { PushDataService } from './push-data.service';

describe('PushDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PushDataService = TestBed.get(PushDataService);
    expect(service).toBeTruthy();
  });
});
