import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceSolutionComponent } from './e-commerce-solution.component';

describe('ECommerceSolutionComponent', () => {
  let component: ECommerceSolutionComponent;
  let fixture: ComponentFixture<ECommerceSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommerceSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerceSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
