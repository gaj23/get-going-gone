const domUpdates = {
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
  //innerHTML?
  //innerText?
  //insertAdjacentHTML?
  //put it here instead.
}

export default domUpdates;