/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WebscrapingMarcaService } from './webscraping-marca.service';

describe('Service: WebscrapingMarca', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebscrapingMarcaService]
    });
  });

  it('should ...', inject([WebscrapingMarcaService], (service: WebscrapingMarcaService) => {
    expect(service).toBeTruthy();
  }));
});
