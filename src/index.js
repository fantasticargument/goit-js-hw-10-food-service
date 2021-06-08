import cardMenu from './templates/menu-card.hbs';
import dishes from './menu.json';

const rfs = {
menuConteiner : document.querySelector('.js-menu'),
chekBocsTurner: document.querySelector('#theme-switch-toggle'),
bodyProfile: document.querySelector('body')
}
const menuMarkup = createMenu(dishes);
rfs.menuConteiner.insertAdjacentHTML('beforeend', menuMarkup);

rfs.chekBocsTurner.addEventListener('click', changeProfile)

function createMenu(dishes) {
    return dishes.map(cardMenu).join(' ')
}

function changeProfile() {
    if (rfs.chekBocsTurner.checked) {
        rfs.bodyProfile.classList.remove('light-theme')
        rfs.bodyProfile.classList.add('dark-theme')
    } else {
        rfs.bodyProfile.classList.remove('dark-theme')
        rfs.bodyProfile.classList.add('light-theme')
    }
    console.log(rfs.chekBocsTurner.checked)
}
