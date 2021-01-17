import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler'
import travelersData from './test-data/travelers'

describe('Traveler', () => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler(travelersData[2]);
  });

  it('Should contain a traveler\'s information', () => {
    expect(traveler.id).to.equal(37);
  });


  it('', () => {});
})