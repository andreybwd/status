/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ClientService } from './client.service';

describe('Client Service', () => {
  beforeEachProviders(() => [ClientService]);

  it('should ...',
      inject([ClientService], (service: ClientService) => {
    expect(service).toBeTruthy();
  }));
});
