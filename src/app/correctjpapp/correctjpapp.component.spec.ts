import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectjpappComponent } from './correctjpapp.component';

describe('CorrectjpappComponent', () => {
  let component: CorrectjpappComponent;
  let fixture: ComponentFixture<CorrectjpappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectjpappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectjpappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
