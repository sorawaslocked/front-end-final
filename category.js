const params = new URLSearchParams(window.location.search);
const categorySimple = params.get('category');

const itemsForCategory = DB.items.filter(item => item.category.simple === categorySimple);
let item = DB.items.find(item => item.category.simple === categorySimple);
const categoryName = item ? item.category.full : null

const categoryNameHeader = document.querySelector('#category-name');
const itemGrid = document.querySelector('#item-grid');

categoryNameHeader.innerText = categoryName;
document.querySelector('title').innerText = categoryName;

itemsForCategory.forEach(item => {
    itemGrid.appendChild(createItemCard(item));
})