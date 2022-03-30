import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitDigitalComponent } from './kit-digital.page';

describe('KitDigitalComponent', () => {
  let component: KitDigitalComponent;
  let fixture: ComponentFixture<KitDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
