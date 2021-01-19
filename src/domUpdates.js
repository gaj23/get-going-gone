const domUpdates = {
    greetTraveler(traveler) {
      document.querySelector('.user-js').innerText = traveler.name.split(' ')[0];
    },

    updateTravelerStats(traveler, tripsData, destinationsData) {
      document.querySelector('.total-places-js').innerText = traveler.filterMyTrips(tripsData).length;
      document.querySelector('.total-price-js').innerText = Math.round(traveler.findTotalExpense(tripsData, destinationsData));
    },

    manageClassList(action, className, element) {
      if (action === 'add' && element) {
        element.classList.add(className);
      } else if (action === 'remove' && element) {
        element.classList.remove(className);
      }
    },

    populateDetails(timing, user, tripsData, destinationsData) {
      const tripsArea = document.querySelector('.detailed-past-trips-js .trips-js');
      tripsArea.innerHTML = '';
      if (user.separateTripTimings(tripsData)[timing]) {
        user.separateTripTimings(tripsData)[timing].forEach(trip => {
          destinationsData.forEach(destination => {
            if (destination.id === trip.destinationID) {
              tripsArea.innerHTML += `<article class="trip-card"><h3>${destination.destination}</h3>
            <img src=${destination.image} alt=${destination.alt}>
            <h4>date: ${trip.date}</h4>
            <h4>days: ${trip.duration}</h4>
            <h4>travelers: ${trip.travelers}</h4>
            </article>`
            }
          })
        })
      }
    },

    checkInputFields() {
      alert `Please fill in all options for an accurate price estimate.`
    }
  },

  displayEstimate(price) {
    document.querySelector('.price-js').innerText = `$${price.costEstimate}`
  },

  // alertSuccessfulRequest() {
  //
  // },

  toggleDarkModeUpdates() {
    document.querySelector('body').classList.toggle('dark-mode-on');
    document.querySelector('.trips-js').classList.toggle('dark-mode-on');
    this.toggleLogoDarkMode();
  },

  toggleLogoDarkMode() {
    const logo = document.querySelector('.logo-js')
    logo.classList.toggle('dark-mode-on');
    if (logo.classList.contains('dark-mode-on')) {
      logo.src = './images/invertedCompass.png';
    } else {
      logo.src = './images/redBlueCompass.png';
    }
  }
}

export default domUpdates;