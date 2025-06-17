const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Theater = require('../models/Theater');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const theaters = [
  {
    name: 'CineFlex IMAX - Downtown',
    address: '123 Movie St',
    city: 'Metropolis',
    state: 'NY',
    zipCode: '10001',
    phone: '555-123-4567',
    capacity: 300,
    screens: [{ screenName: 'Screen 1', capacity: 100 }, { screenName: 'Screen 2', capacity: 200 }]
  },
  {
    name: 'Grand Cinema - Uptown',
    address: '456 Grand Ave',
    city: 'Metropolis',
    state: 'NY',
    zipCode: '10002',
    phone: '555-987-6543',
    capacity: 250,
    screens: [{ screenName: 'Screen A', capacity: 120 }, { screenName: 'Screen B', capacity: 130 }]
  }
];

const importData = async () => {
  await connectDB();
  try {
    await Theater.deleteMany({});
    await Theater.insertMany(theaters);
    console.log('Data Imported!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const deleteData = async () => {
  await connectDB();
  try {
    await Theater.deleteMany({});
    console.log('Data Destroyed!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === '-import') {
  importData();
} else if (process.argv[2] === '-delete') {
  deleteData();
} 