// src/app/features/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth-service/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Assuming the response contains the user token and user data
        localStorage.setItem('userToken', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/']); // Redirect to home or another page
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}