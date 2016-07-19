/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ExaminationListService } from './examination-list.service';

describe('ExaminationList Service', () => {
  beforeEachProviders(() => [ExaminationListService]);

  it('should ...',
      inject([ExaminationListService], (service: ExaminationListService) => {
    expect(service).toBeTruthy();
  }));
});
