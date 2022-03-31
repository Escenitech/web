import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientManagementSolutionComponent } from './client-management-solution.component';

describe('ClientManagementSolutionComponent', () => {
  let component: ClientManagementSolutionComponent;
  let fixture: ComponentFixture<ClientManagementSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientManagementSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientManagementSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
