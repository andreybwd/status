import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ManipulationService } from './manipulation.service';

describe('Manipulation Service', () => {
  beforeEachProviders(() => [ManipulationService]);

  it('should ...',
      inject([ManipulationService], (service: ManipulationService) => {
    expect(service).toBeTruthy();
  }));
});
