import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecautionaryComponent } from './precautionary.component';

describe('PrecautionaryComponent', () => {
  let component: PrecautionaryComponent;
  let fixture: ComponentFixture<PrecautionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecautionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
