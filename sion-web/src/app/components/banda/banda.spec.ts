import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banda } from './banda';

describe('Banda', () => {
  let component: Banda;
  let fixture: ComponentFixture<Banda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Banda],
    }).compileComponents();

    fixture = TestBed.createComponent(Banda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
