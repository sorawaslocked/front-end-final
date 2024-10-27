const params = new URLSearchParams(window.location.search);
const categorySimple = params.get('category');

const itemsForCategory = DB.items.getAllByCategory(categorySimple);
const categoryName = DB.items.getCategoryName(categorySimple);

const categoryNameHeader = document.querySelector('#category-name');
const itemGrid = document.querySelector('#item-grid');

categoryNameHeader.innerText = categoryName;
document.querySelector('title').innerText = categoryName;

itemsForCategory.forEach(item => {
    itemGrid.appendChild(createItemCard(item));
})