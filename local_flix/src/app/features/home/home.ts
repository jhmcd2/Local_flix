import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../services/movie';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { MovieGridComponent } from '../movie-grid/movie-grid';  // Make sure this is imported
import { HeroComponent } from '../hero/hero';
import { NavbarComponent } from '../navbar/navbar';
import { ComicDetail } from '../comic-detail/comic-detail';
import { MusicDetail } from '../music-detail/music-detail';
import { ImageDetail } from '../image-detail/image-detail';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieGridComponent,HeroComponent,NavbarComponent], // Ensure MovieGridComponent is added here
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  featuredMovie: Movie | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // You may need to replace this mock data with real service data fetching
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
      this.featuredMovie = this.movies[0];// Featured movie is the first movie in the list
    });
  }
}