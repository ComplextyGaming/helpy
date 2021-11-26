import { TestBed } from '@angular/core/testing';

import { HttpReporteService } from './http-reporte.service';

describe('HttpReporteService', () => {
  let service: HttpReporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpReporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
