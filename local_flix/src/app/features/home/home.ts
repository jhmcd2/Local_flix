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
import { AuthService } from '../auth-service/auth-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieGridComponent,HeroComponent,NavbarComponent, AuthService], // Ensure MovieGridComponent is added here
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  featuredMovie: Movie | null = null;

// Inject the AuthService in the constructor

  constructor(private movieService: MovieService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // You may need to replace this mock data with real service data fetching
    
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
      this.featuredMovie = this.movies[0];// Featured movie is the first movie in the list
    });
  }
    get inSecurity(): boolean {
    return this.authService.loggedIn();
  }

  get loggIN(): boolean {
    return this.authService.loggedIn();
  }

  get userFirstName(): string {
    return this.authService.getUserFirstName();
  }

  get admin(): boolean {
    return this.authService.adminAuth();
  }

  // For logging out the user (call on button click)
  logout(): void {
    this.authService.logout();
    // Optionally navigate to the login page
  }
}