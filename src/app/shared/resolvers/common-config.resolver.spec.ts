import { TestBed } from '@angular/core/testing';

import { CommonConfigResolver } from './common-config.resolver';

describe('CommonConfigResolver', () => {
  let resolver: CommonConfigResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CommonConfigResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
