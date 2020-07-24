import { TestBed } from '@angular/core/testing';

import { ManageCategoryService } from './manage-category.service';

describe('ManageCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageCategoryService = TestBed.get(ManageCategoryService);
    expect(service).toBeTruthy();
  });
});
