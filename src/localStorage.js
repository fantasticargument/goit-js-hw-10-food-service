const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const rfs = {
  chekBocsTurner: document.querySelector('#theme-switch-toggle'),
  bodyTheme: document.querySelector('body'),
};

const statusCheckBox = localStorage.getItem('chekBocs');

if (statusCheckBox === 'on') {
  rfs.chekBocsTurner.checked = true;
  rfs.bodyTheme.classList.add(Theme.DARK);
} else {
  rfs.bodyTheme.classList.add(Theme.LIGHT);
}

rfs.chekBocsTurner.addEventListener('click', addVAlueLocalStorage);

function addVAlueLocalStorage() {
  rfs.chekBocsTurner.checked?
    localStorage.setItem('chekBocs', 'on'):
    localStorage.setItem('chekBocs', 'off');
  
  rfs.bodyTheme.classList.toggle(Theme.LIGHT);
  rfs.bodyTheme.classList.toggle(Theme.DARK);
}