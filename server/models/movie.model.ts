// server/models/movie.model.ts
import { Schema, model, Document } from 'mongoose';

export interface IMovie extends Document {
  title: string;
  description: string;
  videoUrl: string;
  genre: string;
  releaseDate: Date;
  rating: number;
}

const movieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  rating: { type: Number, required: true },
});

export const Movie = model<IMovie>('Movie', movieSchema);