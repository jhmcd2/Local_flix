// server/controllers/movie.controller.ts
import { Request, Response } from 'express';
import { Movie } from '../models/movie.model';

// Get all movies
export const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving movies' });
  }
};

// Get a single movie by ID
export const getMovieById = async (req: Request, res: Response): Promise<void> => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      res.status(404).json({ message: 'Movie not found' });
      return;
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving movie' });
  }
};