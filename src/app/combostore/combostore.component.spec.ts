import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombostoreComponent } from './combostore.component';

describe('CombostoreComponent', () => {
  let component: CombostoreComponent;
  let fixture: ComponentFixture<CombostoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombostoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombostoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
