// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { MovieDetail } from './features/movie-detail/movie-detail';
import { ImageGridComponent } from './features/image-grid/image-grid';
import { MovieGridComponent } from './features/movie-grid/movie-grid';
import { ComicGridComponent } from './features/comic-grid/comic-grid';
import { MusicGridComponent } from './features/music-grid/music-grid';
import {ComicDetail} from './features/comic-detail/comic-detail'
import { ImageDetail } from './features/image-detail/image-detail';
import { MusicDetail } from './features/music-detail/music-detail';
import { Player } from './features/player/player';
import { AppComponent } from './app';


const routes: Routes = [
  { path: 'home/', component: HomeComponent },
  { path: 'movie/', component: MovieGridComponent },
  { path: 'comic/', component: ComicGridComponent},
  { path: 'music/', component: MusicGridComponent},
  { path: 'image/', component: ImageGridComponent},
  { path: 'movie_detail/:id', component: MovieDetail},
  { path: 'comic_detail/:id', component: ComicDetail},
  { path: 'image_detail/:id', component: ImageDetail},
  { path: 'music_detail/:id', component: MusicDetail},
  { path: 'player/:id', component: Player }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}