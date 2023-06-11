const { passengerService } = require('../services');
const errorMap = require('../utils/errorMap');

const listPassengers = async (_req, res) => {
  const { type, message } = await passengerService.findAll();

  // if (type) return res.status(500).json(message);
  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const getPassenger = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await passengerService.findById(id);
  
  if (type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(200).json(message);
};

const createPassenger = async (req, res) => {
  const { name, email, phone } = req.body;

  const { type, message } = await passengerService.createPassenger(name, email, phone);

  if (type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(201).json(message);
};

module.exports = {
  listPassengers,
  getPassenger,
  createPassenger,
};