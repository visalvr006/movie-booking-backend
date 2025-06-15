const express = require('express');
const router = express.Router();
const { getMovies, createMovie } = require('../controllers/movieController');
const { protect, authorize } = require('../middleware/auth');

router.route('/')
  .get(getMovies)
  .post(protect, authorize('admin'), createMovie);

module.exports = router; 