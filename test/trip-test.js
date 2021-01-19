import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/Trip'
import tripsData from './test-data/trips'
import destinationsData from './test-data/destinations'

describe('Trip', () => {
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

  it('Should generate an id if none is given', () => {
    const anotherTrip = new Trip({
      userID: 50,
      destinationID: 4,
      travelers: 2,
      date: '2020/12/30',
      duration: 30,
      status: 'approved',
    }, tripsData);
    expect(anotherTrip.id).to.equal(201);
  })

  it('Should have a place for suggested activities to be stored if none are given', () => {
    const anotherTrip = new Trip({
      userID: 50,
      destinationID: 4,
      travelers: 2,
      date: '2020/12/30',
      duration: 30,
      status: 'approved',
    }, tripsData);
    expect(anotherTrip.suggestedActivities.length).to.equal(0);
  })

  it('Should calcuate the estimate of a trip\'s price and store it', () => {
    trip2.estimateCost(destinationsData);
    expect(trip2.costEstimate).to.equal(4565);
  })
})