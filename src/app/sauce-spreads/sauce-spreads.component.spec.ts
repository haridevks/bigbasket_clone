import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SauceSpreadsComponent } from './sauce-spreads.component';

describe('SauceSpreadsComponent', () => {
  let component: SauceSpreadsComponent;
  let fixture: ComponentFixture<SauceSpreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SauceSpreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SauceSpreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
