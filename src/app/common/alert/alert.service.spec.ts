/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AlertService } from './alert.service';

describe('Alert Service', () => {
  beforeEachProviders(() => [AlertService]);

  it('should ...',
      inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));
});
