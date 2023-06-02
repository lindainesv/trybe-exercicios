const { driverService } = require('../services');

const getDrivers = async (_req, res) => {
  const { message } = await driverService.getDrivers();

  res.status(200).json(message);
};

module.exports = {
  getDrivers,
};