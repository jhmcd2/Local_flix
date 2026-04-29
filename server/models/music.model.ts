// server/models/music.model.ts
import { Schema, model, Document } from 'mongoose';

export interface IMusic extends Document {
  title: string;
  description: string;
  videoUrl: string;
  genre: string;
  releaseDate: Date;
  rating: number;
}

const musicSchema = new Schema<IMusic>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  rating: { type: Number, required: true },
});

export const Musics = model<IMusic>('Music', musicSchema);