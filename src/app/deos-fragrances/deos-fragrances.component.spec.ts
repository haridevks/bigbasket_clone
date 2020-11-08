import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeosFragrancesComponent } from './deos-fragrances.component';

describe('DeosFragrancesComponent', () => {
  let component: DeosFragrancesComponent;
  let fixture: ComponentFixture<DeosFragrancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeosFragrancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeosFragrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
