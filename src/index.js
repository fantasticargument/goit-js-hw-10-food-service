import cardMenu from './templates/menu-card.hbs';
import dishes from './menu.json';

const menuConteiner = document.querySelector('.js-menu')
const menuMarkup = createMenu(dishes);

menuConteiner.insertAdjacentHTML('beforeend', menuMarkup)

function createMenu(dishes) {
    return dishes.map(cardMenu).join(' ')
}