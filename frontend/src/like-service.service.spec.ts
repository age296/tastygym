/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LikeServiceService } from './like-service.service';

describe('Service: LikeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikeServiceService]
    });
  });

  it('should ...', inject([LikeServiceService], (service: LikeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
