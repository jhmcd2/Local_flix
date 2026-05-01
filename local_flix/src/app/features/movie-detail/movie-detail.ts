import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie';
import { Movie } from '../../models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule,ActivatedRoute,MovieService,],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss',
})
export class MovieDetail implements OnInit{
  movie: Movie | null = null;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router:Router) {}
  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('_id');  // Get the movie ID from the route
    if (movieId) {
      this.movieService.getMovieById(movieId).subscribe((movie) => {
        this.movie = movie;
      });
    }
  }
  gotToPlayer(): void{
    this.router.navigate(['/player', this.movie?._id])
  }
}
