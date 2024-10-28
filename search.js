const params = new URLSearchParams(window.location.search);
const searchQuery = params.get('search');

const searchQueryHeader = document.querySelector('#search-query');
const itemGrid = document.querySelector('#item-grid');

searchQueryHeader.innerText = "Товары по поиску: " + searchQuery;

const itemsForQuery = DB.items.data.filter(
    i => i.description.toLowerCase().includes(searchQuery.toLowerCase()));

itemsForQuery.forEach(item => {
  itemGrid.appendChild(createItemCard(item));
});