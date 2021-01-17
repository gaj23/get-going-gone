import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler'
import travelersData from './test-data/travelers'
import tripsData from './test-data/trips'
import destinationsData from './test-data/destinations'

describe('Traveler', () => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler(travelersData[2]);
  });

  it('Should contain a traveler\'s information', () => {
    expect(traveler.id).to.equal(37);
    expect(traveler.name).to.equal('Jorry Adamczewski');
    expect(traveler.travelerType).to.equal('thrill-seeker');
  });


  it('Should find all the traveler\'s trips', () => {
    const myTrips = traveler.filterMyTrips(tripsData);
    console.log(myTrips);
    expect(traveler.filterMyTrips(tripsData).length).to.equal(4)
  });

  it('Should calculate the total amount a traveler has spent for any year', () => {

  });
})