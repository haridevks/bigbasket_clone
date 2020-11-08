import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrockeryGlasswareComponent } from './crockery-glassware.component';

describe('CrockeryGlasswareComponent', () => {
  let component: CrockeryGlasswareComponent;
  let fixture: ComponentFixture<CrockeryGlasswareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrockeryGlasswareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrockeryGlasswareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
