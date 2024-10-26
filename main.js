const USER_LOGGED_IN = Number.parseInt(sessionStorage.getItem('loggedId')) || 0;
const CART_ITEMS = JSON.parse(localStorage.getItem('cart')) || { id: 0, cart: [] };
localStorage.setItem('cart', JSON.stringify(CART_ITEMS));
