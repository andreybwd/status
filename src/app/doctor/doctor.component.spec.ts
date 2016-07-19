/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DoctorComponent } from './doctor.component';

describe('Component: Doctor', () => {
  it('should create an instance', () => {
    let component = new DoctorComponent();
    expect(component).toBeTruthy();
  });
});
