// src/app/app.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,  // This tells Angular it's a standalone component
  imports: [RouterOutlet, HttpClientModule],  // Include required modules like HttpClientModule
  templateUrl: './app.html',  // Correct the template path
  styleUrls: ['./app.scss'],  // Correct the style path
})
export class AppComponent{
  protected readonly title = signal('local_flix');  // Using the signal reactive state
}