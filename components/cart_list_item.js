function createCartItem(item, count, totalItemPriceValue, totalPriceValue, deliveryPrice) {
  // Create the list item container
  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between align-items-center";

  // Container for image and description
  const itemInfo = document.createElement("div");
  itemInfo.className = "d-flex align-items-center";

  // Product Image
  const img = document.createElement("img");
  img.src = item.imageUrl;
  img.className = "me-3";
  img.style.width = "120px";
  img.style.height = "120px";
  img.style.objectFit = "cover";

  // Product Description
  const descriptionContainer = document.createElement("div");
  const description = document.createElement("p");
  description.textContent = item.description;
  descriptionContainer.appendChild(description);

  // Append image and description to itemInfo container
  itemInfo.appendChild(img);
  itemInfo.appendChild(descriptionContainer);

  // Right-side container for quantity controls and price
  const itemControls = document.createElement("div");
  itemControls.className = "text-center";

  // Quantity Control Button Group
  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group mt-2";
  btnGroup.setAttribute("role", "group");

  let quantityEnding;

  switch (item.quantity.type) {
    case "single":
      quantityEnding = "шт";
      break;
    case "whole":
      quantityEnding = "кг";
      break;
    case "half":
      quantityEnding = "500г";
      break;
  }

  let cartForUser;

  if (USER_LOGGED_IN !== 0) {
    cartForUser = DB.cart_items.find(user => user.id === USER_LOGGED_IN);
  }

  // Price Display
  const priceDisplay = document.createElement("span");
  priceDisplay.className = "fw-bold d-block mt-1";
  priceDisplay.textContent = `${item.price * count} ₸`;

  // Decrease Quantity Button
  const decreaseButton = document.createElement("button");
  decreaseButton.className = "btn btn-outline-secondary btn-sm";
  decreaseButton.innerHTML = `<i class="bi bi-dash"></i>`; // Bootstrap dash icon
  decreaseButton.onclick = () => {
    if (count > 0) {
      count -= item.quantity.count;
      quantityDisplay.innerHTML =`<div style="font-size: 1.2rem;">${count}</div><div style="font-size: 0.9rem;">${quantityEnding}</div>`;
      priceDisplay.textContent = `${item.price * count} ₸`;

      if (USER_LOGGED_IN === 0) {
        return;
      }

      const index = cartForUser.cart.findIndex(i => i === item.id);

      if (index !== -1) {
        cartForUser.cart.splice(index, 1);
      }

      const totalItemPriceValueString = totalItemPriceValue.textContent;
      const totalItemPriceParts = totalItemPriceValueString.split(" ");
      const oldTotalItemPrice = Number.parseInt(totalItemPriceParts[0]);
      const newTotalItemPrice = oldTotalItemPrice - item.price;

      totalItemPriceValue.textContent = `${newTotalItemPrice} ₸`;
      totalPriceValue.textContent = `${newTotalItemPrice + deliveryPrice} ₸`;

      localStorage.setItem('db', JSON.stringify(DB));
    }
  };

  // Quantity Display
  const quantityDisplay = document.createElement("button");
  quantityDisplay.className = "btn btn-outline-secondary btn-sm";
  quantityDisplay.disabled = true; // Display only
  quantityDisplay.innerHTML = `<div style="font-size: 1.2rem;">${count}</div><div style="font-size: 0.9rem;">${quantityEnding}</div>`;

  // Increase Quantity Button
  const increaseButton = document.createElement("button");
  increaseButton.className = "btn btn-outline-secondary btn-sm";
  increaseButton.innerHTML = `<i class="bi bi-plus"></i>`; // Bootstrap plus icon
  increaseButton.onclick = () => {
    count += item.quantity.count;
    quantityDisplay.innerHTML = `<div style="font-size: 1.2rem;">${count}</div><div style="font-size: 0.9rem;">${quantityEnding}</div>`;
    priceDisplay.textContent = `${item.price * count} ₸`;

    if (USER_LOGGED_IN === 0) {
      return;
    }

    const totalItemPriceValueString = totalItemPriceValue.textContent;
    const totalItemPriceParts = totalItemPriceValueString.split(" ");
    const oldTotalItemPrice = Number.parseInt(totalItemPriceParts[0]);
    const newTotalItemPrice = oldTotalItemPrice + item.price;

    totalItemPriceValue.textContent = `${newTotalItemPrice} ₸`;
    totalPriceValue.textContent = `${newTotalItemPrice + deliveryPrice} ₸`;

    cartForUser.cart.push(item.id);

    localStorage.setItem('db', JSON.stringify(DB));
  };

  // Append buttons to the button group
  btnGroup.appendChild(decreaseButton);
  btnGroup.appendChild(quantityDisplay);
  btnGroup.appendChild(increaseButton);

  // Append button group and price to itemControls
  itemControls.appendChild(btnGroup);
  itemControls.appendChild(priceDisplay);

  // Append itemInfo and itemControls to the list item
  listItem.appendChild(itemInfo);
  listItem.appendChild(itemControls);

  return listItem;
}