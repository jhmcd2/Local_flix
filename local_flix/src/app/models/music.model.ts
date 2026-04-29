// src/app/models/music.model.ts
export interface Musics {
  _id: string;
  title: string;
  genre: string;
  releaseDate: Date;
  description: string;
  rating: number;
  videoUrl: string;
}