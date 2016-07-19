import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {ServiceType} from './type.model';

describe('ServiceType', () => {
  it('should create an instance', () => {
    expect(new ServiceType()).toBeTruthy();
  });
});
