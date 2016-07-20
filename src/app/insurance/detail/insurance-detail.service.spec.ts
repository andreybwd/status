/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { InsuranceDetailService } from './insurance-detail.service';

describe('InsuranceDetail Service', () => {
  beforeEachProviders(() => [InsuranceDetailService]);

  it('should ...',
      inject([InsuranceDetailService], (service: InsuranceDetailService) => {
    expect(service).toBeTruthy();
  }));
});
