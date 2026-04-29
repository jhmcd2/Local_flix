// server/models/movie.model.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  releaseDate: Date,
  description: String,
  rating: Number,
  videoUrl: String  // This is the link to the video for playback
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;