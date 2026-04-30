// music-grid.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-grid',
  templateUrl: './music-grid.component.html',
  styleUrls: ['./music-grid.component.scss']
})
export class MusicGridComponent {
  @Input() musics: any[] = [];
}