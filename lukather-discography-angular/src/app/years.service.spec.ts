/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { YearsService } from './years.service';

describe('YearsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YearsService]
    });
  });

  it('should ...', inject([YearsService], (service: YearsService) => {
    expect(service).toBeTruthy();
  }));
});
