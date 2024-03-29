const joi = require('joi');

const idSchema = joi.number().integer().min(1).required();

const addPassengerSchema = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  phone: joi.string().min(9).max(20).required(),
});

const pointSchema = joi.string().min(3).required();

const waypointSchema = joi.object({
  address: pointSchema,
  stopOrder: joi.number().integer().min(1) });

const addRequestTravelSchema = joi.object({
  passengerId: idSchema,
  startingAddress: pointSchema,
  endingAddress: pointSchema.invalid(joi.ref('startingAddress')),
  waypoints: joi.array().items(waypointSchema),
});

const addCarSchema = joi.object({
  model: joi.string().min(3).required(),
  color: joi.string().min(2).required(),
  licensePlate: joi.string().length(7).required(),
});

const addDriverSchema = joi.object({
  name: joi.string().min(3).required(),
  carIds: joi.array().items(idSchema),
});

module.exports = {
  idSchema,
  addPassengerSchema,
  addRequestTravelSchema,
  addDriverSchema,
  addCarSchema,
};
