const styles = document.documentElement.style;
const display = document.getElementById('display');

//Functions Calculator
let logarithm = '';

const calculator = (log = logarithm) => {
  if (log === '') return;
  logarithm = eval(log).toString().slice(0, 13);
  return (display.textContent = logarithm);
};

const reset = () => {
  logarithm = '';
  return (display.textContent = '|');
};

const addKey = (key) => {
  logarithm += key;
  return (display.textContent = logarithm);
};

const deleteSub = () => {
  if (logarithm === '') return;
  logarithm = logarithm.toString().substring(0, logarithm.length - 1);
  if (logarithm === '') {
    logarithm = '';
    return (display.textContent = '|');
  }
  return (display.textContent = logarithm);
};

//Functions Theme
const changeTheme = (theme) => {
  const customStyles = Object.keys(theme);

  for (const style of customStyles) {
    styles.setProperty(style, theme[style]);
  }
};

export { calculator, reset, addKey, deleteSub, changeTheme };
