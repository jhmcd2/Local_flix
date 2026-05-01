// src/app/models/comic.model.ts
export interface Comics {
  _id: string;
  title: string;
  genre: string;
  releaseDate: Date;
  description: string;
  rating: number;
  videoUrl: string;
  tags: string[];
}