/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DoctorSpecialtyService } from './doctor-specialty.service';

describe('DoctorSpecialty Service', () => {
  beforeEachProviders(() => [DoctorSpecialtyService]);

  it('should ...',
      inject([DoctorSpecialtyService], (service: DoctorSpecialtyService) => {
    expect(service).toBeTruthy();
  }));
});
