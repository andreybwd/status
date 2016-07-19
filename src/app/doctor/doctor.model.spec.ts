/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Doctor} from './doctor.model';

describe('Doctor', () => {
  it('should create an instance', () => {
    expect(new Doctor()).toBeTruthy();
  });
});
