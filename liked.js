let likedItemIdsForUser = []

if (USER_LOGGED_IN !== 0) {
  likedItemIdsForUser = DB.liked_items.find(user => user.id === USER_LOGGED_IN).likedItems;
}

const likedItemsForUser = likedItemIdsForUser.map(i => DB.items.find(item => i === item.id));

const itemGrid = document.querySelector('#item-grid');

likedItemsForUser.forEach(item => {
  itemGrid.appendChild(createLikedItemCard(item));
})