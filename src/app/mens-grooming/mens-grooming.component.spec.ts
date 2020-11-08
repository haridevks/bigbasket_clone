import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensGroomingComponent } from './mens-grooming.component';

describe('MensGroomingComponent', () => {
  let component: MensGroomingComponent;
  let fixture: ComponentFixture<MensGroomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensGroomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensGroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
