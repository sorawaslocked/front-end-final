function generateCartItems() {
  return `
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
    </a>`;
}