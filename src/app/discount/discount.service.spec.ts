/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DiscountService } from './discount.service';

describe('Discount Service', () => {
  beforeEachProviders(() => [DiscountService]);

  it('should ...',
      inject([DiscountService], (service: DiscountService) => {
    expect(service).toBeTruthy();
  }));
});
