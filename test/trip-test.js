import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/Trip'
import tripsData from './test-data/trips'

describe.only('Trip', () => {
  let trip, trip2;

  beforeEach(() => {
    trip = new Trip(tripsData[0])
    trip2 = new Trip(tripsData[1])
  })

  it('Should contain a trip\'s information', () => {
    expect(trip.id).to.equal(1);
    expect(trip.userID).to.equal(44);
    expect(trip.destinationID).to.equal(49);
    expect(trip.travelers).to.equal(1);
    expect(trip.date).to.equal('2019/09/16');
    expect(trip.duration).to.equal(8);
    expect(trip.status).to.equal('approved');
    expect(trip.suggestedActivities).to.be.an('array');
  })

  it('Should calcuate the estimate of a trip\'s price', () => {
    expect(trip.estimateCost(destinationsData)).to.equal()
  })
})