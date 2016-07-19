/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DoctorServiceService } from './doctor-service.service';

describe('DoctorService Service', () => {
  beforeEachProviders(() => [DoctorServiceService]);

  it('should ...',
      inject([DoctorServiceService], (service: DoctorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
