// movie-grid.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comic-grid',
  templateUrl: './comic-grid.component.html',
  styleUrls: ['./comic-grid.component.scss']
})
export class ComicGridComponent {
  @Input() movies: any[] = [];
}