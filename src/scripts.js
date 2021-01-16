import './css/base.scss';

import './images/arrow.png';
import './images/coloredCompass.png';
import './images/lightDarkMode.png';

const darkLightMode = document.querySelector('.dark-light-mode-js');

darkLightMode.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  document.querySelector('body').classList.toggle('dark-mode-on');
  darkLightMode.classList.toggle('dark-mode-on');
  // document.querySelector().toggle('dark-mode-on');
}