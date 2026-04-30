import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicGrid } from './music-grid';

describe('MusicGrid', () => {
  let component: MusicGrid;
  let fixture: ComponentFixture<MusicGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
