// src/app/services/Musics.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musics } from '../models/music.model'; // Your Musics model

@Injectable({
  providedIn: 'root'
})
export class MusicsService {
  private apiUrl = 'http://localhost:5000/api/music'; // Your backend API URL

  constructor(private http: HttpClient) {}

  getMusicss(): Observable<Musics[]> {
    return this.http.get<Musics[]>(this.apiUrl);
  }

  getMusicsById(id: string): Observable<Musics> {
    return this.http.get<Musics>(`${this.apiUrl}/${id}`);
  }
}