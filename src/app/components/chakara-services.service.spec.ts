import { TestBed } from '@angular/core/testing';

import { ChakaraServicesService } from './chakara-services.service';

describe('ChakaraServicesService', () => {
  let service: ChakaraServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChakaraServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
