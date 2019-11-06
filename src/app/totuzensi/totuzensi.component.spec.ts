import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotuzensiComponent } from './totuzensi.component';

describe('TotuzensiComponent', () => {
  let component: TotuzensiComponent;
  let fixture: ComponentFixture<TotuzensiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotuzensiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotuzensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
