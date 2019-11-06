import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectJPComponent } from './correct-jp.component';

describe('CorrectJPComponent', () => {
  let component: CorrectJPComponent;
  let fixture: ComponentFixture<CorrectJPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectJPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectJPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
