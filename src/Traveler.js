class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
  }

  filterMyTrips(tripsData) {
    return tripsData.filter(trip => trip.userID === this.id);
  }
}

export default Traveler;