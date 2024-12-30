import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchTimeComponent } from './watch-time.component';

describe('WatchTimeComponent', () => {
  let component: WatchTimeComponent;
  let fixture: ComponentFixture<WatchTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WatchTimeComponent]
    });
    fixture = TestBed.createComponent(WatchTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
