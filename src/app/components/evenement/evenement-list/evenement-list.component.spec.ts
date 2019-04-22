import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementListComponent } from './evenement-list.component';

describe('EvenementListComponent', () => {
  let component: EvenementListComponent;
  let fixture: ComponentFixture<EvenementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
