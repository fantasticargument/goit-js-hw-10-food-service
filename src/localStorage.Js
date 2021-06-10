const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const rfs = {
  chekBocsTurner: document.querySelector('#theme-switch-toggle'),
  bodyTheme: document.querySelector('body'),
};

rfs.bodyTheme.classList.add(Theme.LIGHT)
rfs.chekBocsTurner.addEventListener('click', changeProfile);

function changeProfile() {
  rfs.bodyTheme.classList.toggle(Theme.LIGHT)
  rfs.bodyTheme.classList.toggle(Theme.DARK)
};
