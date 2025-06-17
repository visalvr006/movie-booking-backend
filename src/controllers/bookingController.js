const SeatBooking = require('../models/SeatBooking');

const bookTicket = async (req, res) => {
  const { movie, date, time, theater, seats, phoneNumber, totalPrice } = req.body;

  try {
    const newBooking = await SeatBooking.create({
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
      data: newBooking
    });
  } catch (error) {
    // Handle duplicate phone number error specifically
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'Booking with this phone number already exists.' });
    }
    console.error('Error booking ticket:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

module.exports = {
  bookTicket
}; 