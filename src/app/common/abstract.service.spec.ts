/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AbstractService } from './abstract.service';

describe('Abstract Service', () => {
  beforeEachProviders(() => [AbstractService]);

  it('should ...',
      inject([AbstractService], (service: AbstractService) => {
    expect(service).toBeTruthy();
  }));
});
