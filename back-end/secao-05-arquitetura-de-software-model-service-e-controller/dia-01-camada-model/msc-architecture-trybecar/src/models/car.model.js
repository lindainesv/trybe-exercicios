const connection = require('./connection');

const insert = async (car) => {
  const [{ insertId }] = await connection.execute(
  'INSERT INTO cars (model, color, license_plate) VALUE (?, ?, ?)',
  [car.model, car.color, car.licensePlate],
  );

  return insertId;
};

module.exports = {
  insert,
};