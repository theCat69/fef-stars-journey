import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownScrollArrowComponent } from './down-scroll-arrow.component';

describe('DownScrollArrowComponent', () => {
  let component: DownScrollArrowComponent;
  let fixture: ComponentFixture<DownScrollArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownScrollArrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownScrollArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
