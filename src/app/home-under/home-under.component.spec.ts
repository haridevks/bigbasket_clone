import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUnderComponent } from './home-under.component';

describe('HomeUnderComponent', () => {
  let component: HomeUnderComponent;
  let fixture: ComponentFixture<HomeUnderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUnderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUnderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
