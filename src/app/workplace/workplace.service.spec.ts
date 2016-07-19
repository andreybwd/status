/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { WorkplaceService } from './workplace.service';

describe('Workplace Service', () => {
  beforeEachProviders(() => [WorkplaceService]);

  it('should ...',
      inject([WorkplaceService], (service: WorkplaceService) => {
    expect(service).toBeTruthy();
  }));
});
