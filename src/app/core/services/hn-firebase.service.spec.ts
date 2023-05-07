import { TestBed } from '@angular/core/testing';

import { HnFirebaseService } from './hn-firebase.service';

describe('HnFirebaseService', () => {
  let service: HnFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HnFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
