const mongoose = require('mongoose');

const TheaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a theater name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters']
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  city: {
    type: String,
    required: [true, 'Please add a city']
  },
  state: String,
  zipCode: String,
  phone: String,
  capacity: Number,
  screens: [
    {
      screenName: String,
      capacity: Number
    }
  ]
});

module.exports = mongoose.model('Theater', TheaterSchema); 