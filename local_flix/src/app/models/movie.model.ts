// src/app/models/movie.model.ts
export interface Movie {
  _id: string;
  title: string;
  genre: string;
  releaseDate: Date;
  description: string;
  rating: number;
  videoUrl: string;
  tags: string[];
}