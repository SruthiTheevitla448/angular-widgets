import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueComponent } from './revenue.component';

describe('RevenueComponent', () => {
  let component: RevenueComponent;
  let fixture: ComponentFixture<RevenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RevenueComponent]
    });
    fixture = TestBed.createComponent(RevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});