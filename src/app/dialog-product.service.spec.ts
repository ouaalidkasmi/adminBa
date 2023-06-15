import { TestBed } from '@angular/core/testing';

import { DialogProductService } from './dialog-product.service';

describe('DialogProductService', () => {
  let service: DialogProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
