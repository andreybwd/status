/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Examination} from './examination.model';

describe('Examination', () => {
  it('should create an instance', () => {
    expect(new Examination()).toBeTruthy();
  });
});
