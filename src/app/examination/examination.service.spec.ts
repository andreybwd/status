/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ExaminationService } from './examination.service';

describe('Examination Service', () => {
  beforeEachProviders(() => [ExaminationService]);

  it('should ...',
      inject([ExaminationService], (service: ExaminationService) => {
    expect(service).toBeTruthy();
  }));
});
