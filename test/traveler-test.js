import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler'
import travelersData from './test-data/travelers'
import tripsData from './test-data/trips'
import destinationsData from './test-data/destinations'

describe('Traveler', () => {
  let traveler, traveler2, traveler3;

  beforeEach(() => {
    traveler = new Traveler(travelersData[2]);
    traveler2 = new Traveler(travelersData[9]);
    traveler3 = new Traveler(travelersData[0]);
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

  it('Should separate pending and approved trips', () => {
    expect(traveler.separateApprovedTrips(tripsData).approved.length).to.equal(4);
    expect(traveler.separateApprovedTrips(tripsData).pending.length).to.equal(0);
    expect(traveler3.separateApprovedTrips(tripsData).pending.length).to.equal(1);
  })

  it('Should separate trips into past, current, and future', () => {
    const globeTrotterData = [{
      "id": 48,
      "userID": 50,
      "destinationID": 14,
      "travelers": 6,
      "date": "2021/02/10",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
    }, {
      "id": 49,
      "userID": 50,
      "destinationID": 35,
      "travelers": 1,
      "date": "2020/05/14",
      "duration": 16,
      "status": "approved",
      "suggestedActivities": []
    }, {
      "id": 50,
      "userID": 50,
      "destinationID": 16,
      "travelers": 5,
      "date": "2020/07/02",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
    }, {
      "id": 51,
      "userID": 50,
      "destinationID": 27,
      "travelers": 2,
      "date": "2021/01/16",
      "duration": 15,
      "status": "approved",
      "suggestedActivities": []
    }];
    const globeTrotter = new Traveler(travelersData[15]);
    expect(globeTrotter.separateTripTimings(globeTrotterData).past.length).to.equal(2);
    expect(globeTrotter.separateTripTimings(globeTrotterData).planned).to.deep.equal([{
      id: 48,
      userID: 50,
      destinationID: 14,
      travelers: 6,
      date: '2021/02/10',
      duration: 8,
      status: 'approved',
      suggestedActivities: []
    }]);
    expect(globeTrotter.separateTripTimings(globeTrotterData).current).to.deep.equal([{
      id: 51,
      userID: 50,
      destinationID: 27,
      travelers: 2,
      date: '2021/01/16',
      duration: 15,
      status: 'approved',
      suggestedActivities: []
    }]);

  })
})