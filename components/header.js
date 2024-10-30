// Создание элементов заголовка
const header = document.createElement('header');
header.className = 'navbar navbar-expand-lg py-2 px-xl-5 sticky-top';

const container = document.createElement('div');
container.className = 'container-fluid mx-xl-5';

const showOnLarge = document.createElement('div');
showOnLarge.id = 'show-on-large';
showOnLarge.className = 'justify-content-between align-items-center w-100';

const logoLink = document.createElement('a');
logoLink.className = 'navbar-brand nav-link foodmart-logo';
logoLink.href = 'index.html';
logoLink.textContent = 'FoodMart';

const headerActions = document.createElement('div');
headerActions.id = 'header-actions';
headerActions.className = 'd-flex align-items-center';

// Dropdown для категорий
const categoryDropdown = document.createElement('div');
categoryDropdown.className = 'dropdown category-dropdown me-2';

const categoryButton = document.createElement('button');
categoryButton.id = 'categoryDropdownMenuLink';
categoryButton.className = 'btn btn-light dropdown-toggle border-black border-2';
categoryButton.type = 'button';
categoryButton.setAttribute('data-bs-toggle', 'dropdown');
categoryButton.setAttribute('aria-expanded', 'false');
categoryButton.textContent = 'Категории';

const categoryMenu = document.createElement('ul');
categoryMenu.id = 'caterogiry-dropdown';
categoryMenu.className = 'dropdown-menu dropdown-menu-lg-end category-dropdown-menu me-auto mb-2 mb-lg-0';
categoryMenu.setAttribute('aria-labelledby', 'categoryDropdownMenuLink');

// Список категорий
const categories = [
  { name: 'Фрукты, ягоды', link: '../category.html?category=fruits' },
  { name: 'Овощи, зелень', link: '../category.html?category=veggies' },
  { name: 'Молочные продукты, яйца', link: '../category.html?category=milk' },
  { name: 'Мясо, птица', link: '../category.html?category=meat' },
  { name: 'Рыба, морепродукты', link: '../category.html?category=fish' },
  { name: 'Крупы, макароны', link: '../category.html?category=grain' },
  { name: 'Хлеб, выпечка', link: '../category.html?category=bread' },
  { name: 'Конфеты, печенье, снеки', link: '../category.html?category=snacks' },
  { name: 'Соки, напитки', link: '../category.html?category=drinks' },
  { name: 'Чай, кофе', link: '../category.html?category=tea' }
];

categories.forEach(category => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.className = 'dropdown-item';
  a.href = category.link;
  a.textContent = category.name;
  li.appendChild(a);
  categoryMenu.appendChild(li);
});

categoryDropdown.appendChild(categoryButton);
categoryDropdown.appendChild(categoryMenu);
headerActions.appendChild(categoryDropdown);

// Форма поиска
const searchForm = document.createElement('form');
searchForm.className = 'd-flex mx-3';
searchForm.setAttribute('role', 'search');

const searchInput = document.createElement('input');
searchInput.id = 'search-form-input';
searchInput.className = 'form-control me-2 border-black border-2';
searchInput.type = 'search';
searchInput.placeholder = 'Поиск';
searchInput.setAttribute('aria-label', 'Search');

const searchButton = document.createElement('button');
searchButton.className = 'btn btn-success border-2';
searchButton.type = 'submit';
searchButton.innerHTML = '<i class="bi bi-search"></i>';

searchForm.appendChild(searchInput);
searchForm.appendChild(searchButton);
headerActions.appendChild(searchForm);

// Navbar
const navbarSupportedContent = document.createElement('div');
navbarSupportedContent.id = 'navbarSupportedContent';

const navList = document.createElement('ul');
navList.className = 'navbar-nav ms-auto d-flex flex-row align-items-center gap-3';

// Избранное
const likedItem = document.createElement('li');
likedItem.className = 'nav-item';
const likedLink = document.createElement('a');
likedLink.className = 'nav-link';
likedLink.href = 'liked.html';
const likedButton = document.createElement('button');
likedButton.className = 'btn btn-success border-2 rounded-4';
likedButton.innerHTML = '<i class="bi bi-heart me-2"></i><span class="button-text">Избранное</span>';
likedLink.appendChild(likedButton);
likedItem.appendChild(likedLink);
navList.appendChild(likedItem);

// Корзина
const cartItem = document.createElement('li');
cartItem.className = 'nav-item';
const cartDropdown = document.createElement('div');
cartDropdown.className = 'dropdown';

const cartButton = document.createElement('button');
cartButton.className = 'btn btn-success border-2 rounded-4 dropdown-toggle';
cartButton.type = 'button';
cartButton.setAttribute('data-bs-toggle', 'dropdown');
cartButton.setAttribute('aria-expanded', 'false');
cartButton.innerHTML = '<i class="bi bi-basket me-2"></i><span class="button-text">Корзина</span>';

const cartMenu = document.createElement('div');
cartMenu.className = 'dropdown-menu dropdown-cart';

const cartItems = [
  { name: 'Актуаль Персик Маракуйя 1л', quantity: '10шт' },
  { name: 'Lays Чили Лайм 200г', quantity: '5шт' },
  { name: 'Ташкентские Лимоны', quantity: '2шт' }
];

const cartTable = document.createElement('table');
cartTable.className = 'table-sm table-hover';

cartItems.forEach(item => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.className = 'text-short';
  nameCell.textContent = item.name;
  const quantityCell = document.createElement('td');
  quantityCell.textContent = item.quantity;
  row.appendChild(nameCell);
  row.appendChild(quantityCell);
  cartTable.appendChild(row);
});

cartMenu.appendChild(cartTable);
const cartDivider = document.createElement('hr');
cartDivider.className = 'dropdown-divider';
cartMenu.appendChild(cartDivider);

const viewCartLink = document.createElement('a');
viewCartLink.href = 'cart.html';
const viewCartButton = document.createElement('button');
viewCartButton.className = 'btn btn-success border-2';
viewCartButton.textContent = 'Вся корзина';
viewCartLink.appendChild(viewCartButton);
cartMenu.appendChild(viewCartLink);

cartDropdown.appendChild(cartButton);
cartDropdown.appendChild(cartMenu);
cartItem.appendChild(cartDropdown);
navList.appendChild(cartItem);

// Профиль
const profileItem = document.createElement('li');
profileItem.className = 'nav-item';
const profileButton = document.createElement('button');
profileButton.id = 'profileButton';
profileButton.className = 'btn btn-success border-2 rounded-4';
profileButton.innerHTML = '<i class="bi bi-person me-2"></i><span class="button-text">Профиль</span>';
profileItem.appendChild(profileButton);
navList.appendChild(profileItem);

navbarSupportedContent.appendChild(navList);
showOnLarge.appendChild(logoLink);
showOnLarge.appendChild(headerActions);
showOnLarge.appendChild(navbarSupportedContent);
container.appendChild(showOnLarge);

// Элементы для маленьких экранов
const showOnSmall = document.createElement('div');
showOnSmall.id = 'show-on-small';
showOnSmall.className = 'justify-content-between align-items-center w-100';

const smallLogoLink = document.createElement('a');
smallLogoLink.className = 'navbar-brand nav-link foodmart-logo';
smallLogoLink.href = 'index.html';
smallLogoLink.textContent = 'FoodMart';

const smallHeaderActions = document.createElement('div');
smallHeaderActions.id = 'header-actions';
smallHeaderActions.className = 'd-flex align-items-center gap-2';

const smallLikedLink = document.createElement('a');
smallLikedLink.href = 'liked.html';
smallLikedLink.className = 'nav-link';
const smallLikedButton = document.createElement('button');
smallLikedButton.className = 'btn btn-success border-2 rounded-4';
smallLikedButton.innerHTML = '<i class="bi bi-heart"></i>';
smallLikedLink.appendChild(smallLikedButton);
smallHeaderActions.appendChild(smallLikedLink);

// Маленький Dropdown для корзины
const smallCartDropdown = document.createElement('div');
smallCartDropdown.className = 'dropdown';
const smallCartButton = document.createElement('button');
smallCartButton.className = 'btn btn-success border-2 rounded-4 dropdown-toggle';
smallCartButton.type = 'button';
smallCartButton.setAttribute('data-bs-toggle', 'dropdown');
smallCartButton.setAttribute('aria-expanded', 'false');
smallCartButton.innerHTML = '<i class="bi bi-basket"></i>';

const smallCartMenu = document.createElement('div');
smallCartMenu.className = 'dropdown-menu dropdown-cart';
categories.forEach(category => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.className = 'dropdown-item';
  a.href = category.link;
  a.textContent = category.name;
  li.appendChild(a);
  smallCartMenu.appendChild(li);
});

smallCartDropdown.appendChild(smallCartButton);
smallCartDropdown.appendChild(smallCartMenu);
smallHeaderActions.appendChild(smallCartDropdown);

// Кнопка профиля для мобильных устройств
const mobileProfileButton = document.createElement('button');
mobileProfileButton.id = 'mobileProfile';
mobileProfileButton.className = 'btn btn-success border-2 rounded-4';
mobileProfileButton.innerHTML = '<i class="bi bi-person"></i>';
smallHeaderActions.appendChild(mobileProfileButton);

showOnSmall.appendChild(smallLogoLink);
showOnSmall.appendChild(smallHeaderActions);
container.appendChild(showOnSmall);

// Элементы для маленьких экранов 2
const showOnSmall2 = document.createElement('div');
showOnSmall2.id = 'show-on-small-2';
showOnSmall2.className = 'd-flex';

const smallCategoryDropdown = document.createElement('div');
smallCategoryDropdown.className = 'dropdown category-dropdown me-2';

const smallCategoryButton = document.createElement('button');
smallCategoryButton.id = 'categoryDropdownMenuLink';
smallCategoryButton.className = 'btn btn-light dropdown-toggle border-black border-2';
smallCategoryButton.type = 'button';
smallCategoryButton.setAttribute('data-bs-toggle', 'dropdown');
smallCategoryButton.setAttribute('aria-expanded', 'false');
smallCategoryButton.textContent = 'Категории';

const smallCategoryMenu = document.createElement('ul');
smallCategoryMenu.className = 'dropdown-menu dropdown-menu-lg-end category-dropdown-menu me-auto mb-2 mb-lg-0';
smallCategoryMenu.setAttribute('aria-labelledby', 'categoryDropdownMenuLink');

categories.forEach(category => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.className = 'dropdown-item';
  a.href = category.link;
  a.textContent = category.name;
  li.appendChild(a);
  smallCategoryMenu.appendChild(li);
});

smallCategoryDropdown.appendChild(smallCategoryButton);
smallCategoryDropdown.appendChild(smallCategoryMenu);
showOnSmall2.appendChild(smallCategoryDropdown);

// Форма поиска для маленьких экранов
const smallSearchForm = document.createElement('form');
smallSearchForm.className = 'd-flex';
smallSearchForm.setAttribute('role', 'search');

const smallSearchInput = document.createElement('input');
smallSearchInput.id = 'search-input';
smallSearchInput.className = 'form-control me-2 border-black border-2';
smallSearchInput.type = 'search';
smallSearchInput.placeholder = 'Поиск';
smallSearchInput.setAttribute('aria-label', 'Search');

const smallSearchButton = document.createElement('button');
smallSearchButton.className = 'btn btn-success border-2';
smallSearchButton.type = 'submit';
smallSearchButton.innerHTML = '<i class="bi bi-search"></i>';

smallSearchForm.appendChild(smallSearchInput);
smallSearchForm.appendChild(smallSearchButton);
showOnSmall2.appendChild(smallSearchForm);

container.appendChild(showOnSmall2);
header.appendChild(container);

// Добавление заголовка в указанный контейнер
const headerContainer = document.getElementById('header-container');
headerContainer.appendChild(header);
