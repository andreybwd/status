import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ServiceService } from './service.service';

describe('Service Service', () => {
  beforeEachProviders(() => [ServiceService]);

  it('should ...',
      inject([ServiceService], (service: ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
