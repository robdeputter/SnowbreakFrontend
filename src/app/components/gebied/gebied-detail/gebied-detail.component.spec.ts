import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebiedDetailComponent } from './gebied-detail.component';

describe('GebiedDetailComponent', () => {
  let component: GebiedDetailComponent;
  let fixture: ComponentFixture<GebiedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebiedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebiedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
