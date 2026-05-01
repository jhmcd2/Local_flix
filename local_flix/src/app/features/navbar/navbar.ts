// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth-service/auth-service';

@Component({
  selector: 'app-navbar-grid',
  standalone: true,
  imports: [CommonModule,AuthService],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {

}