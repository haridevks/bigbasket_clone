import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyEssentialsComponent } from './party-essentials.component';

describe('PartyEssentialsComponent', () => {
  let component: PartyEssentialsComponent;
  let fixture: ComponentFixture<PartyEssentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyEssentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
