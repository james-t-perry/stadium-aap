import { TestBed } from '@angular/core/testing';

import { StadiumStoreService } from './stadium-store.service';

describe('StadiumStoreService', () => {
  let service: StadiumStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StadiumStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
