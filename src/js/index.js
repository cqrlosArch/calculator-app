const switchTheme = document.getElementById('switch');
const inputs = [...document.querySelectorAll('.input')];
const keypad = document.getElementById('keypad');

import { theme_1, theme_2, theme_3 } from './themes.js';
import { addKey, calculator, changeTheme, deleteSub, reset } from './function';

const getTheme = {
  theme_1,
  theme_2,
  theme_3,
};

switchTheme.addEventListener('change', (e) => {
  inputs.forEach((el) => el.classList.remove('input--active'));
  e.target.classList.add('input--active');
  changeTheme(getTheme[e.target.value]);
});

const getFunction = {
  RESET: () => reset(),
  DEL: () => deleteSub(),
  RESULT: () => calculator(),
  default: (key) => addKey(key),
};

keypad.addEventListener('click', (e) => {
  if (e.target.classList.contains('key')) {
    const key = e.target.dataset.key.toString();
    return (getFunction[key] || getFunction['default'])(key);
  }
});
