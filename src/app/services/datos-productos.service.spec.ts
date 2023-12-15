import { TestBed } from '@angular/core/testing';

import { DatosProductosService } from './datos-productos.service';

describe('DatosProductosService', () => {
  let service: DatosProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
