const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a movie title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  duration: {
    type: Number,
    required: [true, 'Please add movie duration in minutes']
  },
  language: {
    type: String,
    required: [true, 'Please add movie language']
  },
  releaseDate: {
    type: Date,
    required: [true, 'Please add release date']
  },
  movieType: {
    type: String,
    required: [true, 'Please add movie type'],
    enum: ['2D', '3D', '4DX', 'IMAX']
  },
  genre: {
    type: [String],
    required: [true, 'Please add at least one genre']
  },
  posterUrl: {
    type: String,
    required: [true, 'Please add poster URL']
  },
  trailerUrl: {
    type: String,
    required: [true, 'Please add trailer URL']
  },
  isCurrentlyRunning: {
    type: Boolean,
    default: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Movie', movieSchema); 