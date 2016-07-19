import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Manipulation} from './manipulation.model';

describe('Manipulation', () => {
  it('should create an instance', () => {
    expect(new Manipulation()).toBeTruthy();
  });
});
