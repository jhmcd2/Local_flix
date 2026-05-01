// src/app/models/image.model.ts
export interface Images {
  _id: string;
  title: string;
  genre: string;
  releaseDate: Date;
  description: string;
  rating: number;
  videoUrl: string;
  tags: string[];
}