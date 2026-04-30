// src/app/app.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './features/home/home';
import { NavbarComponent } from './features/navbar/navbar';


@Component({
  selector: 'app-root',
  standalone: true,  // This tells Angular it's a standalone component
  imports: [RouterOutlet, HttpClientModule, HomeComponent,CommonModule,NavbarComponent],  // Include required modules like HttpClientModule
  templateUrl: './app.html',  // Correct the template path
  styleUrls: ['./app.scss'],  // Correct the style path
})
export class AppComponent{
  protected readonly title = signal('local_flix');  // Using the signal reactive state
}