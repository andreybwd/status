/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { InsuranceService } from './insurance.service';

describe('Insurance Service', () => {
  beforeEachProviders(() => [InsuranceService]);

  it('should ...',
      inject([InsuranceService], (service: InsuranceService) => {
    expect(service).toBeTruthy();
  }));
});
