import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessesSolutionComponent } from './processes-solution.component';

describe('ProcessesSolutionComponent', () => {
  let component: ProcessesSolutionComponent;
  let fixture: ComponentFixture<ProcessesSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessesSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessesSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
