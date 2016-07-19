import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SpecialtyService } from './specialty.service';

describe('Specialty Service', () => {
  beforeEachProviders(() => [SpecialtyService]);

  it('should ...',
      inject([SpecialtyService], (service: SpecialtyService) => {
    expect(service).toBeTruthy();
  }));
});
