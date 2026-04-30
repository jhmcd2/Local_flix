// movie-grid.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor

@Component({
  selector: 'app-movie-grid',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for directives like *ngFor
  templateUrl: './movie-grid.html',
  styleUrls: ['./movie-grid.scss'],
})
export class MovieGridComponent {
  @Input() movies: any[] = []; // Your movie data

  constructor() {}
}