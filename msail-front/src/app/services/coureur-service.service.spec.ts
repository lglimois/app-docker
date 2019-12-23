import { TestBed } from '@angular/core/testing';

import { CoureurServiceService } from './coureur-service.service';

describe('CoureurServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoureurServiceService = TestBed.get(CoureurServiceService);
    expect(service).toBeTruthy();
  });
});
