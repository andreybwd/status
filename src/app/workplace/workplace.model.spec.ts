/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Workplace} from './workplace.model';

describe('Workplace', () => {
  it('should create an instance', () => {
    expect(new Workplace()).toBeTruthy();
  });
});
