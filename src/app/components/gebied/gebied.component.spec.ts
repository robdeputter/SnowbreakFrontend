import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebiedComponent } from './gebied.component';

describe('GebiedComponent', () => {
  let component: GebiedComponent;
  let fixture: ComponentFixture<GebiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
