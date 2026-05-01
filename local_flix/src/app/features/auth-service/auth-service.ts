// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/auth';  // Adjust the API endpoint to your backend

  constructor(private http: HttpClient) { }

  // Check if the user is logged in by checking localStorage or sessionStorage
  loggedIn(): boolean {
    return !!localStorage.getItem('userToken'); // Check for a user token in localStorage
  }

  // Get the user's first name (for example from localStorage)
  getUserFirstName(): string {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.firstName || '';
  }

  // Check if the user has admin privileges
  adminAuth(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role === 'admin'; // Assuming you store role as 'admin' or 'user'
  }

  // Log in the user (calls your backend)
  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${this.apiUrl}/login`, credentials); // Adjust the endpoint and body as needed
  }

  // Log out the user
  logout(): void {
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
  }

  // Optionally, register a user
  register(username: string, password: string, firstName: string): Observable<any> {
    const userDetails = { username, password, firstName };
    return this.http.post(`${this.apiUrl}/register`, userDetails); // Adjust the endpoint as needed
  }
}