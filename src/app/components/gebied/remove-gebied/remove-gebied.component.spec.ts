import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveGebiedComponent } from './remove-gebied.component';

describe('RemoveGebiedComponent', () => {
  let component: RemoveGebiedComponent;
  let fixture: ComponentFixture<RemoveGebiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveGebiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveGebiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
