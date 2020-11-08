import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinsBathwareComponent } from './bins-bathware.component';

describe('BinsBathwareComponent', () => {
  let component: BinsBathwareComponent;
  let fixture: ComponentFixture<BinsBathwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinsBathwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinsBathwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
