import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Specialty} from './specialty.model';

describe('Specialty', () => {
  it('should create an instance', () => {
    expect(new Specialty()).toBeTruthy();
  });
});
