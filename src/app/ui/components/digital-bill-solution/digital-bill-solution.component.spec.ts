import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalBillSolutionComponent } from './digital-bill-solution.component';

describe('DigitalBillSolutionComponent', () => {
  let component: DigitalBillSolutionComponent;
  let fixture: ComponentFixture<DigitalBillSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalBillSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalBillSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
