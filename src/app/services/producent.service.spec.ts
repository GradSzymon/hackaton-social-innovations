import { TestBed, inject } from '@angular/core/testing';

import { ProducentService } from './producent.service';

describe('ProducentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProducentService]
    });
  });

  it('should be created', inject([ProducentService], (service: ProducentService) => {
    expect(service).toBeTruthy();
  }));
});
