import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGebiedComponent } from './add-gebied.component';

describe('AddGebiedComponent', () => {
  let component: AddGebiedComponent;
  let fixture: ComponentFixture<AddGebiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGebiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGebiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
