/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { InsuranceComponent } from './insurance.component';

describe('Component: Insurance', () => {
  it('should create an instance', () => {
    let component = new InsuranceComponent();
    expect(component).toBeTruthy();
  });
});
