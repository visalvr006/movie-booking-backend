const SeatBooking = require('../models/SeatBooking');

const getBookedSeats = async (req, res) => {
  try {
    const { movieId, date, time, theater } = req.query;
    const query = {};

    if (movieId) {
      query.movie = movieId;
    }
    if (date) {
      // Assuming date comes in a format like 'YYYY-MM-DD'
      // It's crucial that the date format matches what's stored in the database
      const startOfDay = new Date(date);
      startOfDay.setUTCHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setUTCHours(23, 59, 59, 999);
      query.date = { $gte: startOfDay, $lte: endOfDay };
    }
    if (time) {
      query.time = time;
    }
    if (theater) {
      query.theater = theater;
    }

    const bookedSeats = await SeatBooking.find(query);
    res.status(200).json(bookedSeats);
  } catch (error) {
    console.error('Error fetching booked seats:', error);
    res.status(500).json({ message: 'Error fetching booked seats', error: error.message });
  }
};

module.exports = {
  getBookedSeats
}; 