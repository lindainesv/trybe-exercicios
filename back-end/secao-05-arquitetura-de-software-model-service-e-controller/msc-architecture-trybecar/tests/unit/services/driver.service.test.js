const { expect } = require('chai');
const sinon = require('sinon');

const {
  driverCarModel,
  carModel,
  driverModel,
} = require('../../../src/models');

const { driverService } = require('../../../src/services');

const {
  createdDriverWithoutCars,
  createdDriverWithCars,
  createdDriver,
} = require('./mocks/driver.service.mock');

const { carList } = require('./mocks/car.service.mock');

const validDriverName = 'Gus';
const invalidValue = '1';

describe('Verificando service Driver', function () {
  describe('Tentando cadastrar uma nova pessoa motorista com erros semânticos', function () {
    it('retorna um erro ao receber um nome inválido', async function () {
      const response = await driverService.createDriver(invalidValue);

        expect(response.type).to.equal('INVALID_VALUE');
        expect(response.message).to.equal(
          '"name" length must be at least 3 characters long',
         );
    });
    it('retorna um erro ao receber uma lista de carros inválida', async function () {
      const response = await driverService.createDriver(
        validDriverName,
        invalidValue,
      );

      expect(response.type).to.equal('INVALID_VALUE');
      expect(response.message).to.equal('"carIds" must be an array');
    });
  });

  describe('Tentando cadastrar uma nova pessoa motorista com erros de id', function () {
    beforeEach(function () {
      // Aqui o nosso stub deve simular que o carro solicitado não existe
      sinon.stub(carModel, 'findById').resolves();
    });

    afterEach(function () {
      sinon.restore();
    });

    it('retorna o erro "CAR_NOT_FOUND"', async function () {
      const response = await driverService.createDriver(validDriverName, [999]);
      expect(response.type).to.equal('CAR_NOT_FOUND');
    });

    it('retorna a mensagem "Some car is not found"', async function () {
      const response = await driverService.createDriver(validDriverName, [999]);
      expect(response.message).to.equal('Some car is not found');
    });
  });

  describe('Cadastrando uma nova pessoa motorista com sucesso sem carros', function () {
    beforeEach(function () {
      // como aqui estamos criando motorista sem carro,
      // não precisamos encontrar nenhum, apenas cadastrar e encontrar a pessoa motorista
      sinon.stub(driverModel, 'insert').resolves(1);
      sinon.stub(driverModel, 'findById').resolves(createdDriver);
    });

    afterEach(function () {
      sinon.restore();
    });

    it('retorna a pessoa motorista cadastrada', async function () {
      const response = await driverService.createDriver(validDriverName);
      expect(response.message).to.deep.equal(createdDriverWithoutCars);
    });

    it('não retorna erro', async function () {
      const response = await driverService.createDriver(validDriverName);
      expect(response.type).to.equal(null);
    });
  });

  describe('Cadastrando uma nova pessoa motorista com sucesso com carros', function () {
    beforeEach(function () {
      // já aqui temos vários stubs em cena!

      // 1 - cadastra e encontra a pessoa motorista ok
      sinon.stub(driverModel, 'insert').resolves(1);
      sinon.stub(driverCarModel, 'insert').resolves();
      sinon.stub(driverModel, 'findById').resolves(createdDriver);

      // 2 - criação de relacionamentos ok

      // 3 - ao procurar um carro, mande o primeiro e depois o segundo da lista
      // eles são chamados tanto ao validar como para retornar na função principal
      sinon.stub(carModel, 'findById')
      .onCall(0) // chamada da validação
        .resolves(carList[0])
      .onCall(1) // chamada da validação
        .resolves(carList[1])
      .onCall(2) // chamada da função
        .resolves(carList[0])
      .onCall(3) // chamada da função
        .resolves(carList[1]);
    });

    afterEach(function () {
      sinon.restore();
    });

    it('retorna os carros vinculados à pessoa motorista', async function () {
      const response = await driverService.createDriver(
        validDriverName,
        [1, 2],
      );

      expect(response.type).to.equal(null);
      expect(response.message).to.deep.equal(createdDriverWithCars);
      console.log(createdDriverWithCars);
    });
    it('não retorna erro', async function () {
      const response = await driverService.createDriver(
        validDriverName,
        [1, 2],
      );

      expect(response.type).to.equal(null);
    });
  });
});
