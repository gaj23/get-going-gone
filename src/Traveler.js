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
  //tried pulling the if statement before, but leads to the problem of "trip" not being defined.
  separateTrips(tripsData) {
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
}



export default Traveler;