// music-grid.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-grid',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './music-grid.html',
  styleUrls: ['./music-grid.scss']
})
export class MusicGridComponent {
  @Input() musics: any[] = [];
}