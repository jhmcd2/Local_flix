import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicGrid } from './comic-grid';

describe('ComicGrid', () => {
  let component: ComicGrid;
  let fixture: ComponentFixture<ComicGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
