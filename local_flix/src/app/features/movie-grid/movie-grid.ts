// movie-grid.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor
import { Router } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-grid',
  standalone: true,
  imports: [CommonModule, Router], // Import CommonModule for directives like *ngFor
  templateUrl: './movie-grid.html',
  styleUrls: ['./movie-grid.scss'],
})
export class MovieGridComponent {
  @Input() movies: Movie[] = []; // Your movie data

  constructor(private router: Router) {}

  selectMovie(movie: Movie): void {
    this.router.navigate(['/movie',movie._id])
  }
}