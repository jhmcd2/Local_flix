// image-grid.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-grid.html',
  styleUrls: ['./image-grid.scss']
})
export class ImageGridComponent {
  @Input() images: any[] = [];
}