const sinon = require('sinon');
const { expect } = require('chai');

const { carModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { carModels, newCar } = require('./mocks/car.model.mock');

describe('Car Model', function () {
  it('Encontra um carro pelo id', async function () {
      sinon.stub(connection, 'execute').resolves([[carModels[0]]]);

      const result = await carModel.findById(1);

      expect(result).to.equal(carModels[0]);
    });

  it('Cadastra um novo carro', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 8 }]);

    const result = await carModel.insert(newCar);

    expect(result).to.equal(8);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});