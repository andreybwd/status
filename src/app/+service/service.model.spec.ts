import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Service} from './service.model';

describe('Service', () => {
  it('should create an instance', () => {
    expect(new Service()).toBeTruthy();
  });
});
