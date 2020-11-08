import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsNamkeensComponent } from './chips-namkeens.component';

describe('ChipsNamkeensComponent', () => {
  let component: ChipsNamkeensComponent;
  let fixture: ComponentFixture<ChipsNamkeensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsNamkeensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsNamkeensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
