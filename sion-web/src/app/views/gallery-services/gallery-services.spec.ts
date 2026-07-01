import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryServices } from './gallery-services';

describe('GalleryServices', () => {
  let component: GalleryServices;
  let fixture: ComponentFixture<GalleryServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryServices],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
