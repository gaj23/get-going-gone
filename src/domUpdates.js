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

  toggleDarkModeUpdates() {
    document.querySelector('body').classList.toggle('dark-mode-on');
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