import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUpload } from './log-upload';

describe('LogUpload', () => {
  let component: LogUpload;
  let fixture: ComponentFixture<LogUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
