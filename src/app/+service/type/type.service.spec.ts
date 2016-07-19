import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ServiceTypeService } from './type.service';

describe('Type Service', () => {
  beforeEachProviders(() => [ServiceTypeService]);

  it('should ...',
      inject([ServiceTypeService], (service: ServiceTypeService) => {
    expect(service).toBeTruthy();
  }));
});
