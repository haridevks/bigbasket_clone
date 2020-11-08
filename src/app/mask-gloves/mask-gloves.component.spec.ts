import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskGlovesComponent } from './mask-gloves.component';

describe('MaskGlovesComponent', () => {
  let component: MaskGlovesComponent;
  let fixture: ComponentFixture<MaskGlovesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskGlovesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskGlovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
