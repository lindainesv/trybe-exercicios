const sinon = require('sinon');
const { expect } = require('chai');
const { driverService } = require('../../../src/services');
const { driverList } = require('./mocks/driver-exercises.controller.mock');
const { driverController } = require('../../../src/controllers');

describe.only('Teste de unidade driverController', function () { 
  describe('Listando os motoristas', function () {
    it('Deve retornar a lista de motoritas', function () {
      beforeEach(function () {
        sinon
        .stub(driverService, 'getDrivers')
        .resolves({ type: null, message: driverList });
      });
    });

      it('é chamado o status com o codigo  200', async function () {
        const res = {};
        const req = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await driverController.getDrivers(req, res);

        expect(res.status).to.have.been.calledOnceWith(200);
      });

    it('é chamado o json com a lista de motoristas', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await driverController.getDrivers(req, res);

      expect(res.json).to.have.been.calledWith(driverList);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});