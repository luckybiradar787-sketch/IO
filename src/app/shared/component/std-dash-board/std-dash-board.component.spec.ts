import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDashBoardComponent } from './std-dash-board.component';

describe('StdDashBoardComponent', () => {
  let component: StdDashBoardComponent;
  let fixture: ComponentFixture<StdDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
