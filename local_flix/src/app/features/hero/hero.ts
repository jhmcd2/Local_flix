// hero.component.ts
import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
  @Input() movie: any;
  constructor() {}
}