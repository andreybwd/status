/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {DoctorServiceModel} from './doctor-service.model';

describe('DoctorServiceModel', () => {
  it('should create an instance', () => {
    expect(new DoctorServiceModel()).toBeTruthy();
  });
});
