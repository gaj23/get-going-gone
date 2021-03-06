import {
  DateTime
} from 'luxon';

class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
  }

  filterMyTrips(tripsData) {
    return tripsData.filter(trip => trip.userID === this.id);
  }

  findTotalExpense(tripsData, destinationsData) {
    return this.findExpenses(tripsData, destinationsData);
  }

  findTotalYearExpense(year, tripsData, destinationsData) {
    return this.filterMyTrips(tripsData).reduce((acc, trip) => {
      if (parseInt(trip.date.split('/')[0]) === year) {
        destinationsData.find(destination => {
          if (trip.destinationID === destination.id) {
            const subtotal = ((trip.travelers * destination.estimatedFlightCostPerPerson) + (trip.duration * destination.estimatedLodgingCostPerDay));
            acc += (subtotal * .1) + subtotal;
          }
        })
      }
      return acc;
    }, 0)
  }

  //Would like to refactor findTotalYearExpense to encorpreate findExpenses (and cut down redundancy), but problem of 'trip' needed to be defined.
  findExpenses(tripsData, destinationsData) {
    return this.filterMyTrips(tripsData).reduce((acc, trip) => {
      destinationsData.find(destination => {
        if (trip.destinationID === destination.id) {
          const subtotal = ((trip.travelers * destination.estimatedFlightCostPerPerson) + (trip.duration * destination.estimatedLodgingCostPerDay));
          acc += (subtotal * .1) + subtotal;
        }
      })
      return acc;
    }, 0)
  }
  separateApprovedTrips(tripsData) {
    return this.filterMyTrips(tripsData).reduce((acc, trip) => {
      if (!acc.approved && !acc.pending) {
        acc.approved = [];
        acc.pending = [];
      }

      if (trip.status === 'approved') {
        acc.approved.push(trip);
      } else {
        acc.pending.push(trip);
      }
      return acc;
    }, {})
  }

  separateTripTimings(tripsData) {
    return this.filterMyTrips(tripsData).reduce((acc, trip) => {
      const currentDate = DateTime.local();
      const splitDate = trip.date.split('/');
      const parsedDate = splitDate.map(num => parseInt(num));
      const startDate = DateTime.local(parsedDate[0], parsedDate[1], parsedDate[2]);
      const endDate = startDate.plus({
        days: trip.duration
      })
      //refactor above into another function if possible;
      if (!acc.past && !acc.future && !acc.present) {
        acc.past = [];
        acc.planned = [];
        acc.current = [];
      }
      if (endDate < currentDate) {
        acc.past.push(trip);
      } else if (startDate > currentDate) {
        acc.planned.push(trip);
      } else if (startDate < currentDate && endDate > currentDate) {
        acc.current.push(trip);
      }
      return acc;
    }, {})
  }
}



export default Traveler;
