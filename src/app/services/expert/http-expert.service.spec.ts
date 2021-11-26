import { TestBed } from '@angular/core/testing';

import { HttpExpertService } from './http-expert.service';

describe('HttpExpertService', () => {
  let service: HttpExpertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpExpertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
