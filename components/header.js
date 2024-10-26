function loadHeader() {
  const headerHTML = `
  <header class="navbar navbar-expand-lg py-2 px-xl-5 sticky-top">
    <div class="container-fluid mx-xl-5">
      <div class="d-none d-lg-flex justify-content-between align-items-center w-100">
        <a class="navbar-brand nav-link foodmart-logo" href="index.html">FoodMart</a>
        <div id="header-actions" class="d-flex align-items-center">
          <div class="dropdown category-dropdown me-2">
            <button id="categoryDropdownMenuLink" class="btn btn-light dropdown-toggle border-black border-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Категории
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end category-dropdown-menu me-auto mb-2 mb-lg-0" aria-labelledby="categoryDropdownMenuLink">
              <li><a class="dropdown-item" href="fruits-berries.html">Фрукты, ягоды</a></li>
              <li><a class="dropdown-item" href="vegetables-herbs.html">Овощи, зелень</a></li>
              <li><a class="dropdown-item" href="dairy-eggs.html">Молочные продукты, яйца</a></li>
              <li><a class="dropdown-item" href="meat-poultry.html">Мясо, птица</a></li>
              <li><a class="dropdown-item" href="fish-seafood.html">Рыба, морепродукты</a></li>
              <li><a class="dropdown-item" href="grain-pasta.html">Крупы, макароны</a></li>
              <li><a class="dropdown-item" href="bread-baked.html">Хлеб, выпечка</a></li>
              <li><a class="dropdown-item" href="candies-cookies-snacks.html">Конфеты, печенье, снеки</a></li>
              <li><a class="dropdown-item" href="drinks.html">Соки, напитки</a></li>
              <li><a class="dropdown-item" href="tea-coffee.html">Чай, кофе</a></li>
            </ul>
          </div>
          <form class="d-flex mx-3" role="search">
            <input id="search-form-input" class="form-control me-2 border-black border-2" type="search" placeholder="Поиск" aria-label="Search">
            <button class="btn btn-success border-2" type="submit"><i class="bi bi-search"></i></button>
          </form>
        </div>
        <div id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto d-flex flex-row align-items-center gap-3">
            <li class="nav-item">
              <a class="nav-link" href="liked.html">
                <button class="btn btn-success border-2 rounded-4"><i class="bi bi-heart me-2"></i><span class="button-text">Избранное</span></button>  
              </a>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <button class="btn btn-success border-2 rounded-4 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-basket me-2"></i>
                  <span class="button-text">Корзина</span>
                </button>
                <div class="dropdown-menu dropdown-cart">
                  <table class="table-sm table-hover">
                    <tr>
                      <td class="text-short">
                        <img src="images/drinks/actual_peach_passionfruit.jpg" class="cart-min-img" alt="">
                        Актуаль Персик Маракуйя 1л
                      </td>
                      <td>10шт</td>
                    </tr>
                    <tr>
                      <td class="text-short">
                        <img src="images/lays_chili_lime.jpg" class="cart-min-img" alt="">
                        Lays Чили Лайм 200г
                      </td>
                      <td>5шт</td>
                    </tr>
                    <tr>
                      <td class="text-short">
                        <img src="images/fruits-berries/tashkent_lemon.png" class="cart-min-img" alt="">
                        Ташкентские Лимоны
                      </td>
                      <td>2шт</td>
                    </tr>
                  </table>
                  <hr class="dropdown-divider">
                  <a href="cart.html" class="button-cart">
                    <button class="btn btn-success border-2">Вся корзина</button>
                  </a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a href="profile.html">
                <button class="btn btn-success border-2 rounded-4"><i class="bi bi-person me-2"></i><span class="button-text">Профиль</span></button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex d-lg-none justify-content-between align-items-center w-100">
        <a class="navbar-brand nav-link foodmart-logo" href="index.html">FoodMart</a>
        <div id="header-actions" class="d-flex align-items-center gap-2">
          <a href="liked.html" class="nav-link">
            <button class="btn btn-success border-2 rounded-4"><i class="bi bi-heart"></i></button>
          </a>
          <div class="dropdown">
            <button class="btn btn-success border-2 rounded-4 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-basket"></i></button>
            <div class="dropdown-menu dropdown-cart">
                  <table class="table-sm table-hover">
                    <tr>
                      <td class="text-short">
                        <img src="images/drinks/actual_peach_passionfruit.jpg" class="cart-min-img" alt="">
                        Актуаль Персик Маракуйя 1л
                      </td>
                      <td>10шт</td>
                    </tr>
                    <tr>
                      <td class="text-short">
                        <img src="images/lays_chili_lime.jpg" class="cart-min-img" alt="">
                        Lays Чили Лайм 200г
                      </td>
                      <td>5шт</td>
                    </tr>
                    <tr>
                      <td class="text-short">
                        <img src="images/fruits-berries/tashkent_lemon.png" class="cart-min-img" alt="">
                        Ташкентские Лимоны
                      </td>
                      <td>2шт</td>
                    </tr>
                  </table>
                  <hr class="dropdown-divider">
                  <a href="cart.html" class="button-cart">
                    <button class="btn btn-success border-2">Вся корзина</button>
                  </a>
                </div>
          </div>
          <a href="profile.html" class="nav-link">
            <button class="btn btn-success border-2 rounded-4"><i class="bi bi-person"></i></button>
          </a>
        </div>
      </div>
      <div id="header-search" class="d-flex d-lg-none">
        <div class="dropdown category-dropdown me-2">
          <button id="categoryDropdownMenuLink" class="btn btn-light dropdown-toggle border-black border-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Категории
          </button>
          <ul class="dropdown-menu dropdown-menu-lg-end category-dropdown-menu me-auto mb-2 mb-lg-0" aria-labelledby="categoryDropdownMenuLink">
            <li><a class="dropdown-item" href="fruits-berries.html">Фрукты, ягоды</a></li>
            <li><a class="dropdown-item" href="vegetables-herbs.html">Овощи, зелень</a></li>
            <li><a class="dropdown-item" href="dairy-eggs.html">Молочные продукты, яйца</a></li>
            <li><a class="dropdown-item" href="meat-poultry.html">Мясо, птица</a></li>
            <li><a class="dropdown-item" href="fish-seafood.html">Рыба, морепродукты</a></li>
            <li><a class="dropdown-item" href="grain-pasta.html">Крупы, макароны</a></li>
            <li><a class="dropdown-item" href="bread-baked.html">Хлеб, выпечка</a></li>
            <li><a class="dropdown-item" href="candies-cookies-snacks.html">Конфеты, печенье, снеки</a></li>
            <li><a class="dropdown-item" href="drinks.html">Соки, напитки</a></li>
            <li><a class="dropdown-item" href="tea-coffee.html">Чай, кофе</a></li>
          </ul>
        </div>
        <form class="d-flex" role="search">
          <input id="search-input" class="form-control me-2 border-black border-2" type="search" placeholder="Поиск" aria-label="Search">
          <button class="btn btn-success border-2" type="submit"><i class="bi bi-search"></i></button>
        </form>
      </div>
    </div>
  </header>

  `;
  document.getElementById('header-container').innerHTML = headerHTML;
}

// Вызов функции для загрузки хедера
loadHeader();
