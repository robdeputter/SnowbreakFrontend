import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRankingComponent } from './remove-ranking.component';

describe('RemoveRankingComponent', () => {
  let component: RemoveRankingComponent;
  let fixture: ComponentFixture<RemoveRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
