import './css/base.scss';

import './images/lightDarkMode.png';
import './images/redBlueCompass.png';
import './images/invertedCompass.png';
import './images/arrow.png';

const darkLightMode = document.querySelector('.dark-light-mode-js');

darkLightMode.addEventListener('click', toggleDarkMode);


function toggleDarkMode() {
  document.querySelector('body').classList.toggle('dark-mode-on');
  darkLightMode.classList.toggle('dark-mode-on');
  toggleLogoDarkMode();
}

function toggleLogoDarkMode() {
  const logo = document.querySelector('.logo-js')
  logo.classList.toggle('dark-mode-on');
  if (logo.classList.contains('dark-mode-on')) {
    logo.src = './images/invertedCompass.png';
  } else {
    logo.src = './images/redBlueCompass.png';
  }
}