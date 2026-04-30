// movie-grid.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comic-grid',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './comic-grid.html',
  styleUrls: ['./comic-grid.scss']
})
export class ComicGridComponent {
  @Input() comics: any[] = [];
}