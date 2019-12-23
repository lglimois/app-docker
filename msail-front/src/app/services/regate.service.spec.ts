import { TestBed } from '@angular/core/testing';

import { RegateService } from './regate.service';

describe('RegateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegateService = TestBed.get(RegateService);
    expect(service).toBeTruthy();
  });
});
