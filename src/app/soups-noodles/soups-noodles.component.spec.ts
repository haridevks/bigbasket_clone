import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupsNoodlesComponent } from './soups-noodles.component';

describe('SoupsNoodlesComponent', () => {
  let component: SoupsNoodlesComponent;
  let fixture: ComponentFixture<SoupsNoodlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoupsNoodlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoupsNoodlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
