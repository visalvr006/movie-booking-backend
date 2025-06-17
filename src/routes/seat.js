const express = require('express');
const router = express.Router();
const seatController = require('../controllers/seatController');

router.get('/', seatController.getBookedSeats);

module.exports = router; 