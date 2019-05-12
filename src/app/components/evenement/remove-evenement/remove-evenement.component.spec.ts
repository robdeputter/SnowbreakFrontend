import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveEvenementComponent } from './remove-evenement.component';

describe('RemoveEvenementComponent', () => {
  let component: RemoveEvenementComponent;
  let fixture: ComponentFixture<RemoveEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
