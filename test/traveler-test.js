import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler'
import travelersData from './test-data/travelers'
import tripsData from './test-data/trips'
import destinationsData from './test-data/destinations'

describe('Traveler', () => {
  let traveler, traveler2;

  beforeEach(() => {
    traveler = new Traveler(travelersData[2]);
    traveler2 = new Traveler(travelersData[9])
  });

  it('Should contain a traveler\'s information', () => {
    expect(traveler.id).to.equal(37);
    expect(traveler.name).to.equal('Jorry Adamczewski');
    expect(traveler.travelerType).to.equal('thrill-seeker');
  });


  it('Should find all the traveler\'s trips', () => {
    expect(traveler.filterMyTrips(tripsData).length).to.equal(4);
  });

  it('Should calculate the total amount a traveler has spent with the travel agency', () => {
    expect(traveler.findTotalExpense(tripsData, destinationsData)).to.equal(15526.5)
    expect(traveler2.findTotalExpense(tripsData, destinationsData)).to.equal(58300);
  });

  it('Should calculate the total amount a traveler has spent in a given year', () => {
    expect(traveler.findTotalYearExpense(2020, tripsData, destinationsData)).to.equal(15526.5);
    expect(traveler2.findTotalYearExpense(2019, tripsData, destinationsData)).to.equal(5819);
    expect(traveler2.findTotalYearExpense(2021, tripsData, destinationsData)).to.equal(6094);
  })
})