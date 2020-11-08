import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcicibankComponent } from './icicibank.component';

describe('IcicibankComponent', () => {
  let component: IcicibankComponent;
  let fixture: ComponentFixture<IcicibankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcicibankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcicibankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
