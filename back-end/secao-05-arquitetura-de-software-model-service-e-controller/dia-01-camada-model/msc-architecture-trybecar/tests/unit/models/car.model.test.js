const sinon = require('sinon');
const { expect } = require('chai');

const { carModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');

describe('Car Model', function () {
  describe('Cadastra um novo carro', function () {
    before(async function () {
      const execute = { insertId: 1 };

      sinon.stub(connection, 'execute').resolves([execute]);
    });

    after(async function () {
      connection.execute.restore();
    });

    const expected = 1;

    const payload = {
      model: 'Renault Sandero',
      color: 'Branco',
      licensePlate: 'NCA-0956',
    };

    it('com sucesso', async function () {
      const response = await carModel.insert(payload);

      expect(response).to.equal(expected);
    });
  });
});