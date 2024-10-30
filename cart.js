let itemIdsInCartForUser = [];

if (USER_LOGGED_IN !== 0) {
  itemIdsInCartForUser = DB.cart_items.find(user => user.id === USER_LOGGED_IN).cart;
}

const itemCount = {};

itemIdsInCartForUser.forEach(id => {
  if (id in itemCount) {
    return;
  }

  itemCount[id] = itemIdsInCartForUser.filter(i => i === id).length;
});

const itemsAndCount = Object.keys(itemCount).map(key => {
  return DB.items.find(i => i.id === Number.parseInt(key));
})

const itemCartList = document.querySelector('#item-cart-list');

itemsAndCount.forEach(item => {
  itemCartList.appendChild(createCartItem(item, itemCount[item.id]));
})