class Trip {
  constructor(tripObj, destinationsData) {
    this.id = tripObj.id;
    this.userID = tripObj.userID;
    this.destinationID = tripObj.destinationID;
    this.travelers = tripObj.travelers;
    this.date = tripObj.date;
    this.duration = tripObj.duration;
    this.status = tripObj.status;
    this.suggestedActivities = tripObj.suggestedActivities;
    this.costEstimate = 0;
  }

  estimateCost(destinationsData) {
    const destination = destinationsData.find(destination => destination.id === this.destinationID);
    const subtotal = ((this.duration * destination.estimatedLodgingCostPerDay) + (this.travelers * destination.estimatedFlightCostPerPerson));
    this.costEstimate = subtotal + (subtotal * .10);
  }
}

export default Trip;