/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {DoctorService} from './doctor-service.model';

describe('DoctorService', () => {
  it('should create an instance', () => {
    expect(new DoctorService()).toBeTruthy();
  });
});
