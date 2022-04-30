/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WgerServiceApiService } from './wger-service-Api.service';

describe('Service: WgerServiceApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WgerServiceApiService]
    });
  });

  it('should ...', inject([WgerServiceApiService], (service: WgerServiceApiService) => {
    expect(service).toBeTruthy();
  }));
});
