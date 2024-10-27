function loadHeader() {
  const headerHTML = `
  <header class="navbar navbar-expand-lg py-2 px-xl-5 sticky-top">
    <div class="container-fluid mx-xl-5">
      <div id="show-on-large" class="justify-content-between align-items-center w-100">
        <a class="navbar-brand nav-link foodmart-logo" href="index.html">FoodMart</a>
        <div id="header-actions" class="d-flex align-items-center">
          <div class="dropdown category-dropdown me-2">
            <button id="categoryDropdownMenuLink" class="btn btn-light dropdown-toggle border-black border-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Категории
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end category-dropdown-menu me-auto mb-2 mb-lg-0" aria-labelledby="categoryDropdownMenuLink">
              ${generateCategoryItems()}
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
                  ${generateCartItems()}
                </div>
              </div>
            </li>
            <li class="nav-item">
                <button id="profileButton" class="btn btn-success border-2 rounded-4"><i class="bi bi-person me-2"></i><span class="button-text">Профиль</span></button>
                <div id="loginRegisterModal1" class="modal">
                    <div class="modal-content">
                        <span class="close1">&times;</span>
                        <div class="tab">
                            <button id="loginTab1" class="tablinks active">Sign in</button>
                            <button id="registerTab1" class="tablinks">New account</button>
                        </div>
                        <!-- Login Form -->
                        <form id="loginForm1" class="tabcontent">
                            <div class="input-container">
                                <input type="email" id="loginEmail1" placeholder="E-mail" required>
                            </div>
                            <div class="input-container">
                                <input type="password" id="loginPassword1" placeholder="Password" required>
                                <span class="toggle-password1">Hide</span>
                            </div>
                            <div class="remember-me">
                                <input type="checkbox" id="rememberMe">
                                <label for="rememberMe">Remember me</label>
                            </div>
                            <button type="submit" class="submit-btn">Login</button>
                        </form>
                        <!-- Registration Form -->
                        <form id="registerForm1" class="tabcontent" style="display:none">
                            <div class="input-container">
                                <input type="text" id="regName" placeholder="Full name" required>
                            </div>
                            <div class="input-container">
                                <input type="email" id="regEmail" placeholder="E-mail" required>
                            </div>
                            <div class="input-container">
                                <input type="password" id="regPassword" placeholder="Password" required>
                                <span class="toggle-password1">Hide</span>
                            </div>
                            <div class="input-container">
                                <input type="password" id="regConfirmPassword" placeholder="Confirm Password" required>
                                <span class="toggle-password1">Hide</span>
                            </div>
                            <div class="input-container">
                                <input type="tel" id="regPhone" placeholder="Phone (optional)">
                            </div>
                            <button type="submit" class="submit-btn">Register</button>
                        </form>
                    </div>
                </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="show-on-small" class=" justify-content-between align-items-center w-100">
        <a class="navbar-brand nav-link foodmart-logo" href="index.html">FoodMart</a>
        <div id="header-actions" class="d-flex align-items-center gap-2">
          <a href="liked.html" class="nav-link">
            <button class="btn btn-success border-2 rounded-4"><i class="bi bi-heart"></i></button>
          </a>
          <div class="dropdown">
            <button class="btn btn-success border-2 rounded-4 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-basket"></i></button>
            <div class="dropdown-menu dropdown-cart">
               ${generateCartItems()}   
            </div>
          </div>
            <button id="profileButtonMobile" class="btn btn-success border-2 rounded-4"><i class="bi bi-person"></i></button>
            <div id="loginRegisterModal" class="modal">
            <div class="modal-content">
                    <span class="close">&times;</span>
                    <div class="tab">
                        <button id="loginTab" class="tablinks active">Sign in</button>
                        <button id="registerTab" class="tablinks">New account</button>
                    </div>
                    <!-- Login Form -->
                    <form id="loginForm" class="tabcontent">
                        <div class="input-container">
                            <input type="email" id="loginEmail" placeholder="E-mail" required>
                        </div>
                        <div class="input-container">
                            <input type="password" id="loginPassword" placeholder="Password" required>
                            <span class="toggle-password">Hide</span>
                        </div>
                        <div class="remember-me">
                            <input type="checkbox" id="rememberMe">
                            <label for="rememberMe">Remember me</label>
                        </div>
                        <button type="submit" class="submit-btn">Login</button>
                    </form>
                    <!-- Registration Form -->
                    <form id="registerForm" class="tabcontent" style="display:none">
                        <div class="input-container">
                            <input type="text" id="regName" placeholder="Full name" required>
                        </div>
                        <div class="input-container">
                            <input type="email" id="regEmail" placeholder="E-mail" required>
                        </div>
                        <div class="input-container">
                            <input type="password" id="regPassword" placeholder="Password" required>
                            <span class="toggle-password">Hide</span>
                        </div>
                        <div class="input-container">
                            <input type="password" id="regConfirmPassword" placeholder="Confirm Password" required>
                            <span class="toggle-password">Hide</span>
                        </div>
                        <div class="input-container">
                            <input type="tel" id="regPhone" placeholder="Phone (optional)">
                        </div>
                        <button type="submit" class="submit-btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
      <div id="show-on-small" class="d-flex">
        <div class="dropdown category-dropdown me-2">
          <button id="categoryDropdownMenuLink" class="btn btn-light dropdown-toggle border-black border-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Категории
          </button>
          <ul class="dropdown-menu dropdown-menu-lg-end category-dropdown-menu me-auto mb-2 mb-lg-0" aria-labelledby="categoryDropdownMenuLink">
            ${generateCategoryItems()}
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
