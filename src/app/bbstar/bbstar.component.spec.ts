import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbstarComponent } from './bbstar.component';

describe('BbstarComponent', () => {
  let component: BbstarComponent;
  let fixture: ComponentFixture<BbstarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbstarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
