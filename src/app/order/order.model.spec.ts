/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Order} from './order.model';

describe('Order', () => {
  it('should create an instance', () => {
    expect(new Order()).toBeTruthy();
  });
});
