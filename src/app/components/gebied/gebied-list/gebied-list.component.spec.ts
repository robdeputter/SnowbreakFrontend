import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebiedListComponent } from './gebied-list.component';

describe('GebiedListComponent', () => {
  let component: GebiedListComponent;
  let fixture: ComponentFixture<GebiedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebiedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebiedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
