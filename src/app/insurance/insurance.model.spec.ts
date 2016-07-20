/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Insurance} from './insurance.model';

describe('Insurance', () => {
  it('should create an instance', () => {
    expect(new Insurance()).toBeTruthy();
  });
});
