// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { MovieDetail } from './features/movie-detail/movie-detail';
import {ComicDetail} from './features/comic-detail/comic-detail'
import { ImageDetail } from './features/image-detail/image-detail';
import { MusicDetail } from './features/music-detail/music-detail';
import { Player } from './features/player/player';
import { AppComponent } from './app';


const routes: Routes = [
  { path: 'home/', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetail },
  { path: 'player/:id', component: Player }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}