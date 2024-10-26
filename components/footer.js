function loadFooter() {
  const footerHTML = `
  <footer class="py-4">
    <div class="container py-4 px-5">
      <div class="row">
        <div class="col-lg-2 mb-3">
          <a class="navbar-brand nav-link foodmart-logo" href="index.html">FoodMart</a>
          <ul class="list-unstyled small">
            <li class="mb-2">
              Онлайн магазин продуктов
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-3 offset-lg-2">
          <h5>Информация</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="">Спецпредложения</a>
            </li>
            <li class="mb-2">
              <a href="">Условия пользования</a>
            </li>
            <li class="mb-2">
              <a href="">Вакансии</a>
            </li>
            <li class="mb-2">
              <a href="">О нас</a>
            </li>
            <li class="mb-2">
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-3">
          <h5>Контакты</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <i class="bi bi-envelope me-2"></i>info@foodmart.kz
            </li>
            <li class="mb-2">
              <i class="bi bi-envelope me-2"></i>offer@foodmart.kz
            </li>
            <li class="mb-2">
              <i class="bi bi-envelope me-2"></i>marketing@foodmart.kz
            </li>
            <li class="mb-2">
              <i class="bi bi-telephone me-2"></i>+7 (777) 777-77-77
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-2">
          <h5>Авторы</h5>
          <ul class="list-unstyled">
            <li class="mb-2">Nurali Iskakov</li>
            <li class="mb-2">Nurgissa Beknazarov</li>
            <li class="mb-2">Yerassyl Temirkhan</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  `;

  document.getElementById('footer-container').innerHTML = footerHTML;
}

window.onload = loadFooter;
