import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination'
import destinationsData from './test-data/destinations'

describe('Destination', () => {
  let destination;

  beforeEach(() => {
    destination = new Destination(destinationsData[3]);
  })

  it('Should contain an id number for easy identification', () => {
    expect(destination.id).to.equal(4);
  })

  it('Should contain information a traveler would want to know about a destination', () => {
    expect(destination.name).to.equal('Cartagena, Colombia');
    expect(destination.estimatedLodgingCostPerDay).to.equal(65);
    expect(destination.estimatedFlightCostPerPerson).to.equal(350);
    expect(destination.image).to.equal('https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
    expect(destination.alt).to.equal('boats at a dock during the day time')
  })
})