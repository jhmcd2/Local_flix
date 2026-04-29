import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comics } from '../models/comic.model';

@Injectable({
  providedIn: 'root',
})
export class Comic {
  private apiUrl = 'http://localhost:5000/api/comic'; // Your backend API URL

  constructor(private http: HttpClient) {}

  getComics(): Observable<Comic[]> {
    return this.http.get<Comic[]>(this.apiUrl);
  }

  getComicById(id: string): Observable<Comic> {
    return this.http.get<Comic>(`${this.apiUrl}/${id}`);
  }
}
