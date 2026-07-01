import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsService } from './forms-service';

describe('FormsService', () => {
  let component: FormsService;
  let fixture: ComponentFixture<FormsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsService],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
