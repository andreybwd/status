/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DoctorGroupService } from './doctor-group.service';

describe('DoctorGroup Service', () => {
  beforeEachProviders(() => [DoctorGroupService]);

  it('should ...',
      inject([DoctorGroupService], (service: DoctorGroupService) => {
    expect(service).toBeTruthy();
  }));
});
