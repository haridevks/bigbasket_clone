import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsmeatComponent } from './eggsmeat.component';

describe('EggsmeatComponent', () => {
  let component: EggsmeatComponent;
  let fixture: ComponentFixture<EggsmeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggsmeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggsmeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
