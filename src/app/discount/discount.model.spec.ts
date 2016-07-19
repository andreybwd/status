/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Discount} from './discount.model';

describe('Discount', () => {
  it('should create an instance', () => {
    expect(new Discount()).toBeTruthy();
  });
});
