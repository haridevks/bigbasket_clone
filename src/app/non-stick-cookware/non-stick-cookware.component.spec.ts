import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonStickCookwareComponent } from './non-stick-cookware.component';

describe('NonStickCookwareComponent', () => {
  let component: NonStickCookwareComponent;
  let fixture: ComponentFixture<NonStickCookwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonStickCookwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonStickCookwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
