import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenSnacksComponent } from './frozen-snacks.component';

describe('FrozenSnacksComponent', () => {
  let component: FrozenSnacksComponent;
  let fixture: ComponentFixture<FrozenSnacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrozenSnacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenSnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
