// src/app/features/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie';
import { Movie } from '../../models/movie.model';
import { ComicDetail } from '../comic-detail/comic-detail'
import { MusicDetail } from '../music-detail/music-detail'
import { ImageDetail } from '../image-detail/image-detail'

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  featuredMovie: any;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
      this.featuredMovie = this.movies[0];
    });
  }
}