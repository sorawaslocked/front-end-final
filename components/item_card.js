function createItemCard(item) {
  // Create card container
  const colDiv = document.createElement("div");
  colDiv.className = "col d-flex justify-content-center";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card h-100";

  // Create and add product image
  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = item.imageUrl;
  img.style.width = "100%";
  img.style.height = "200px"; // Fixed height for uniformity
  img.style.objectFit = "cover"; // Ensures image fills the container without distortion
  cardDiv.appendChild(img);

  // Create card body
  const cardBody = document.createElement("div");
  cardBody.className = "card-body d-flex flex-column";

  // Product description
  const description = document.createElement("p");
  description.className = "card-text";
  description.textContent = item.description;
  cardBody.appendChild(description);

  // Hidden input for storing item ID
  const hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
  hiddenInput.value = item.id; // Store the item ID
  cardBody.appendChild(hiddenInput);

  // Price section
  const priceDiv = document.createElement("div");
  priceDiv.className = "d-flex justify-content-between align-items-center mt-auto";

  // Original and discounted price handling
  const priceContainer = document.createElement("div");

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

  if (item.discountPercent > 0) {
      const originalPrice = document.createElement("span");
      originalPrice.className = "original-price";

      originalPrice.textContent = `${item.price} ₸ ${quantityEnding}`;
      priceContainer.appendChild(originalPrice);

      const discountedPrice = document.createElement("p");
      discountedPrice.className = "fw-bold mb-0";
      const discountedAmount = item.price * (1 - item.discountPercent / 100);
      discountedPrice.textContent = `${discountedAmount} ₸ ${quantityEnding}`;
      priceContainer.appendChild(discountedPrice);
  } else {
      const regularPrice = document.createElement("p");
      regularPrice.className = "fw-bold mb-0";
      regularPrice.textContent = `${item.price} ₸ ${quantityEnding}`;
      priceContainer.appendChild(regularPrice);
  }

  priceDiv.appendChild(priceContainer);

  // Quantity and buttons group
  const quantityGroup = document.createElement("div");
  quantityGroup.className = "input-group quantity-group";

  // Initial count set to 0
  let count = 0;

  const minusButton = document.createElement("button");
  minusButton.className = "btn btn-outline-primary btn-sm";
  minusButton.type = "button";
  minusButton.textContent = "-";
  minusButton.onclick = function() {
      if (count > 0) {
        count -= item.quantity.count;
        quantityDisplay.innerHTML = `<div style="font-size: 1.2rem;">${count}</div><div style="font-size: 0.9rem;">${quantityEnding}</div>`;
      }
  };
  quantityGroup.appendChild(minusButton);

  const quantityDisplay = document.createElement("div");
  quantityDisplay.className = "text-center";
  quantityDisplay.style.padding = "4px";
  quantityDisplay.style.width = "40px"// Add padding for space inside
  quantityDisplay.style.borderTop = "1px solid blue"; // Optional: light border for visual separation
  quantityDisplay.style.borderBottom = "1px solid blue"; // Optional: light border for visual separation
  quantityDisplay.style.borderRadius = "1px";
  quantityDisplay.innerHTML = `<div style="font-size: 1.2rem;">${count}</div><div style="font-size: 0.9rem;">${quantityEnding}</div>`;
  quantityGroup.appendChild(quantityDisplay);

  const plusButton = document.createElement("button");
  plusButton.className = "btn btn-outline-primary btn-sm";
  plusButton.type = "button";
  plusButton.textContent = "+";
  plusButton.onclick = function() {
    count += item.quantity.count;
    quantityDisplay.innerHTML = `<div style="font-size: 1.2rem;">${count}</div><div style="font-size: 0.9rem;">${quantityEnding}</div>`;
  };

  quantityGroup.appendChild(plusButton);

  priceDiv.appendChild(quantityGroup);

  // Append price and quantity controls to card body
  cardBody.appendChild(priceDiv);

  // Append card body to card
  cardDiv.appendChild(cardBody);

  // Append card to colDiv
  colDiv.appendChild(cardDiv);

  return colDiv;
}