import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsbcbankComponent } from './hsbcbank.component';

describe('HsbcbankComponent', () => {
  let component: HsbcbankComponent;
  let fixture: ComponentFixture<HsbcbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsbcbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsbcbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
