import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSearch } from './log-search';

describe('LogSearch', () => {
  let component: LogSearch;
  let fixture: ComponentFixture<LogSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
