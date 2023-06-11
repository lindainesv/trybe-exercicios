const sinon = require('sinon');
const { expect } = require('chai');

const { driverModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { drivers, newDriver } = require('./mocks/driver.model.mock');

describe('Driver Model', function () {
  it('Lista todas as pessoas motoristas', async function () {
    sinon.stub(connection, 'execute').resolves([drivers]);

    const result = await driverModel.findAll();

    expect(result).to.be.deep.equal(drivers);
  });

  it('Encontra uma pessoa motorista pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[drivers[0]]]);

    const result = await driverModel.findById(1);

    expect(result).to.be.deep.equal(drivers[0]);
  });

  it('Cadastra uma pessoa motorista', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 10 }]);

    const result = await driverModel.insert(newDriver);

    expect(result).to.be.equal(10);
  });

  afterEach(function () {
    sinon.restore();
  });
});