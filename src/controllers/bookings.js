const SeatBooking = require('../models/SeatBooking');

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Public
exports.createBooking = async (req, res) => {
  try {
    const { movie, date, time, theater, seats, phoneNumber, totalPrice } = req.body;

    // Create booking
    const booking = await SeatBooking.create({
      movie,
      date,
      time,
      theater,
      seats,
      phoneNumber,
      totalPrice
    });

    res.status(201).json({
      success: true,
      data: booking
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Public
exports.getBookings = async (req, res) => {
  try {
    const bookings = await SeatBooking.find();
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
}; 