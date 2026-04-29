// server/routes/movie.routes.ts
import { Router } from 'express';
import { getMovies, getMovieById } from '../controllers/movie.controller';

const router = Router();

router.get('/movies', getMovies);             // Route to get all movies
router.get('/movies/:id', getMovieById);      // Route to get a movie by ID

export default router;