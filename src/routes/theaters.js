const express = require('express');
const { getTheaters, createTheater } = require('../controllers/theaters');

const router = express.Router();

router.route('/').get(getTheaters).post(createTheater);

module.exports = router; 