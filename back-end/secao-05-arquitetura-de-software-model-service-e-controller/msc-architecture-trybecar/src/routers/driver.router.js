const express = require('express');
const { driverController } = require('../controllers');

const router = express.Router();

router.get(
  '/',
  driverController.getDrivers,
);

module.exports = router;