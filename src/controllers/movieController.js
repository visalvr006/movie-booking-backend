const Movie = require('../models/Movie');

// @desc    Get all currently running movies
// @route   GET /api/movies
// @access  Public
exports.getMovies = async (req, res) => {
  try {
    // Build query object
    const queryObj = { isCurrentlyRunning: true };

    // Add movieType filter if provided
    if (req.query.movieType) {
      queryObj.movieType = req.query.movieType;
    }

    // Add genre filter if provided
    if (req.query.genre) {
      queryObj.genre = { $in: [req.query.genre] };
    }

    // Add language filter if provided
    if (req.query.language) {
      queryObj.language = req.query.language;
    }

    // Execute query
    const movies = await Movie.find(queryObj)
      .select('-__v')
      .sort({ releaseDate: -1 });

    res.status(200).json({
      success: true,
      count: movies.length,
      data: movies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Create new movie
// @route   POST /api/movies
// @access  Private (will be implemented later)
exports.createMovie = async (req, res) => {
  try {
    const {
      title,
      description,
      duration,
      language,
      releaseDate,
      movieType,
      genre,
      posterUrl,
      trailerUrl,
      rating
    } = req.body;

    // Create movie
    const movie = await Movie.create({
      title,
      description,
      duration,
      language,
      releaseDate,
      movieType,
      genre,
      posterUrl,
      trailerUrl,
      rating,
      isCurrentlyRunning: true
    });

    res.status(201).json({
      success: true,
      data: movie
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    }
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}; 