/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Client} from './client.model';

describe('Client', () => {
  it('should create an instance', () => {
    expect(new Client()).toBeTruthy();
  });
});
