const mongoose = require('mongoose');

const SeatBookingSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.ObjectId,
    ref: 'Movie',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  theater: {
    type: String,
    required: true
  },
  seats: {
    type: [String],
    required: true
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please provide a phone number'],
    unique: true, // Assuming one booking per phone number for simplicity, or modify based on requirements
    match: [/^[0-9]{10}$/, 'Please add a valid 10-digit phone number']
  },
  totalPrice: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SeatBooking', SeatBookingSchema); 