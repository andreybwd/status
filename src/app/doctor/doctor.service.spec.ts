/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DoctorService } from './doctor.service';

describe('Doctor Service', () => {
  beforeEachProviders(() => [DoctorService]);

  it('should ...',
      inject([DoctorService], (service: DoctorService) => {
    expect(service).toBeTruthy();
  }));
});
