import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingBackgroundComponent } from './glowing-background.component';

describe('GlowingBackgroundComponent', () => {
  let component: GlowingBackgroundComponent;
  let fixture: ComponentFixture<GlowingBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlowingBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowingBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
