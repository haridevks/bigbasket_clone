import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapsShowerGelsComponent } from './soaps-shower-gels.component';

describe('SoapsShowerGelsComponent', () => {
  let component: SoapsShowerGelsComponent;
  let fixture: ComponentFixture<SoapsShowerGelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoapsShowerGelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapsShowerGelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
