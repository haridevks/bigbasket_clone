import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyAtHomeComponent } from './beauty-at-home.component';

describe('BeautyAtHomeComponent', () => {
  let component: BeautyAtHomeComponent;
  let fixture: ComponentFixture<BeautyAtHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautyAtHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
