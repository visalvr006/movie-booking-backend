const Theater = require('../models/Theater');

// @desc    Get all theaters
// @route   GET /api/theaters
// @access  Public
exports.getTheaters = async (req, res, next) => {
  try {
    const theaters = await Theater.find();
    res.status(200).json({
      success: true,
      count: theaters.length,
      data: theaters
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Create new theater
// @route   POST /api/theaters
// @access  Private (Admin only for real app)
exports.createTheater = async (req, res, next) => {
  try {
    const theater = await Theater.create(req.body);
    res.status(201).json({
      success: true,
      data: theater
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
}; 