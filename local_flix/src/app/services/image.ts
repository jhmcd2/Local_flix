// src/app/services/Image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Images } from '../models/image.model'; // Your Image model

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://localhost:5000/api/image'; // Your backend API URL

  constructor(private http: HttpClient) {}

  getImages(): Observable<Images[]> {
    return this.http.get<Images[]>(this.apiUrl);
  }

  getImageById(id: string): Observable<Images> {
    return this.http.get<Images>(`${this.apiUrl}/${id}`);
  }
}