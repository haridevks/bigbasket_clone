import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdbibankComponent } from './idbibank.component';

describe('IdbibankComponent', () => {
  let component: IdbibankComponent;
  let fixture: ComponentFixture<IdbibankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdbibankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdbibankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
