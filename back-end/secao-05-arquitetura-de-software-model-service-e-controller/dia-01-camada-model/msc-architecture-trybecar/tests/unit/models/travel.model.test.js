const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const travelModel = require('../../../src/models/travel.model');

const { newTravel, travels, travelsFromDB } = require('./mocks/travel.model.mock');

describe('Testes de unidade do model de viagens', function () {
  it('Realizando uma operação INSERT com o model travel', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    // act
    const result = await travelModel.insert(newTravel);

    // assert
    expect(result).to.be.deep.equal(42);
  });

  it('Recuperando uma travel a partir do seu id', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([[travelsFromDB[0]]]);
    // act
    const result = await travelModel.findById(1);
    // assert
    expect(result).to.be.deep.equal(travels[0]);
  });

  it('Recuperando as travels a partir do seu travel_status_id', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([travelsFromDB]);
    // act
    const result = await travelModel.findByTravelStatusId(1);
    // assert
    expect(result).to.be.deep.equal(travels);
  });

  it('Atualizando uma travel a partir do seu id - rota ../assing', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1, changedRows: 1 }]);

    const travelId = 1;
    const dataToUpdate = {
      driverId: 1, travelStatusId: 2,
    };

    // Act
    const result = await travelModel.updateById(travelId, dataToUpdate);

    // Assert
    expect(result[0].affectedRows).to.be.equal(1);
    expect(result[0].changedRows).to.be.equal(1);
  }); 
 
  afterEach(function () {
    sinon.restore();
  });
});