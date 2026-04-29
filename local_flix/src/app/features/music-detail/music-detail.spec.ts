import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDetail } from './music-detail';

describe('MusicDetail', () => {
  let component: MusicDetail;
  let fixture: ComponentFixture<MusicDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
