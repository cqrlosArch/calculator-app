const switchTheme = document.getElementById('switch');
const inputs = [...document.querySelectorAll('.input')];
const display = document.getElementById('display');
const keypad = document.getElementById('keypad');
const styles = document.documentElement.style;

import { theme_1, theme_2, theme_3 } from './themes';

let logarithm = '';

/**
 *
 * @param {String} log Sentence to resolve
 * @returns Result eval()
 */
const calculator = (log) => {
  logarithm = eval(log !== '' && log.toString());
  return (display.textContent = logarithm);
};

/**
 *
 * @returns Reset variable logarithm
 */
const reset = () => {
  logarithm = '';
  return (display.textContent = '|');
};

/**
 *
 * @param {string*} key Add new digit to logarithm
 * @returns string
 */
const addKey = (key) => {
  logarithm += key;
  return (display.textContent = logarithm);
};

/**
 *
 * @returns Delete last added digit
 */
const deleteSub = () => {
  logarithm = logarithm.substring(0, logarithm.length - 1);
  if (logarithm === '') {
    logarithm = '';
    return (display.textContent = '|');
  }
  return (display.textContent = logarithm);
};

keypad.addEventListener('click', (e) => {
  if (e.target.classList.contains('key') && e.target.dataset.key === '=') {
    calculator(logarithm);
  }
  if (e.target.classList.contains('key') && e.target.dataset.key === 'DEL') {
    deleteSub();
  }
  if (e.target.classList.contains('key') && e.target.dataset.key === 'RESET') {
    reset();
  }
  if (e.target.classList.contains('key') && e.target.dataset.key !== '=') {
    addKey(e.target.dataset.key.toString());
  }
});

const changeTheme = (theme) => {
  const customStyles = Object.keys(theme);

  for (const style of customStyles) {
    styles.setProperty(style, theme[style]);
  }
};

const getTheme = {
  theme_1,
  theme_2,
  theme_3,
};

switchTheme.addEventListener('change', (e) => {
  inputs.forEach((el) => {
    el.classList.remove('input--active');
  });

  e.target.classList.add('input--active');
  changeTheme(getTheme[e.target.value]);
});
