import { TestBed } from '@angular/core/testing';

import { InstaApiService } from './insta-api.service';

describe('InstaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstaApiService = TestBed.get(InstaApiService);
    expect(service).toBeTruthy();
  });
});
