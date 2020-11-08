import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscuitsCookiesComponent } from './biscuits-cookies.component';

describe('BiscuitsCookiesComponent', () => {
  let component: BiscuitsCookiesComponent;
  let fixture: ComponentFixture<BiscuitsCookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiscuitsCookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiscuitsCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
