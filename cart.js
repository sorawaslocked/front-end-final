let itemIdsInCartForUser = [];

// Load cart items for the logged-in user
if (USER_LOGGED_IN !== 0) {
  itemIdsInCartForUser = DB.cart_items.find(user => user.id === USER_LOGGED_IN).cart;
}

const itemCount = {};

itemIdsInCartForUser.forEach(id => {
  if (id in itemCount) {
    return;
  }
  itemCount[id] = itemIdsInCartForUser.filter(i => i === id).length;
});

const itemsAndCount = Object.keys(itemCount).map(key => {
  return DB.items.find(i => i.id === Number.parseInt(key));
});

const itemCartList = document.querySelector('#item-cart-list');

// ORDER SUMMARY
const card = document.createElement("div");
card.className = "card";

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const title = document.createElement("h5");
title.className = "card-title";
title.textContent = "Ваш заказ";
cardBody.appendChild(title);

// Total Price
const totalItemPriceDiv = document.createElement("div");
totalItemPriceDiv.className = "d-flex justify-content-between";
const totalItemPriceLabel = document.createElement("span");
totalItemPriceLabel.textContent = "Сумма покупок:";
const totalItemPriceValue = document.createElement("span");
totalItemPriceValue.className = "fw-bold";
totalItemPriceValue.textContent = "";
totalItemPriceDiv.appendChild(totalItemPriceLabel);
totalItemPriceDiv.appendChild(totalItemPriceValue);
cardBody.appendChild(totalItemPriceDiv);

// Delivery Price
const deliveryPriceDiv = document.createElement("div");
deliveryPriceDiv.className = "d-flex justify-content-between";
const deliveryPriceLabel = document.createElement("span");
deliveryPriceLabel.textContent = "Delivery Price:";
const deliveryPriceValue = document.createElement("span");
deliveryPriceValue.className = "fw-bold";
deliveryPriceValue.textContent = "";
deliveryPriceDiv.appendChild(deliveryPriceLabel);
deliveryPriceDiv.appendChild(deliveryPriceValue);
cardBody.appendChild(deliveryPriceDiv);

// Total
const totalPriceDiv = document.createElement("div");
totalPriceDiv.className = "d-flex justify-content-between";
const totalPriceLabel = document.createElement("span");
totalPriceLabel.textContent = "Полная сумма:";
const totalPriceValue = document.createElement("span");
totalPriceValue.className = "fw-bold";
totalPriceValue.textContent = "";
totalPriceDiv.appendChild(totalPriceLabel);
totalPriceDiv.appendChild(totalPriceValue);
cardBody.appendChild(totalPriceDiv);

// Promo Code Input
const promoCodeDiv = document.createElement("div");
promoCodeDiv.className = "mt-3";
const promoCodeLabel = document.createElement("label");
promoCodeLabel.setAttribute("for", "promoCode");
promoCodeLabel.className = "form-label";
promoCodeLabel.textContent = "Promo Code";
const promoCodeInput = document.createElement("input");
promoCodeInput.type = "text";
promoCodeInput.id = "promoCode";
promoCodeInput.className = "form-control";
promoCodeInput.placeholder = "Enter promo code";
promoCodeDiv.appendChild(promoCodeLabel);
promoCodeDiv.appendChild(promoCodeInput);
cardBody.appendChild(promoCodeDiv);

// Pay Button
const payButtonDiv = document.createElement("div");
payButtonDiv.className = "d-grid mt-4";
const payButton = document.createElement("button");
payButton.className = "btn btn-success btn-lg";
payButton.textContent = "Оплатить сейчас";
payButtonDiv.appendChild(payButton);
cardBody.appendChild(payButtonDiv);

const goBackButtonDiv = document.createElement("div");
goBackButtonDiv.className = "d-grid mt-4";
const goBackButton = document.createElement("button");
goBackButton.className = "btn btn-secondary btn-lg";
goBackButton.textContent = "Продолжить покупки";
goBackButton.style.width = "100%";
const goBackButtonLink = document.createElement('a');
goBackButtonLink.href = "index.html";
goBackButtonLink.appendChild(goBackButton);
goBackButtonDiv.appendChild(goBackButtonLink);
cardBody.appendChild(goBackButtonDiv);

card.appendChild(cardBody);
document.querySelector('#order-summary').appendChild(card);

let initialItemPriceTotal = 0;
const deliveryPrice = 1000;

itemsAndCount.forEach(item => {
  itemCartList.appendChild(createCartItem(item, itemCount[item.id], totalItemPriceValue, totalPriceValue, deliveryPrice));
  initialItemPriceTotal += (item.price * itemCount[item.id]);
})

totalItemPriceValue.textContent = `${initialItemPriceTotal} ₸`;
deliveryPriceValue.textContent = `${deliveryPrice} ₸`;
totalPriceValue.textContent = `${initialItemPriceTotal + deliveryPrice} ₸`;

const currentUser = DB.users.find(user => user.id === USER_LOGGED_IN);

// Load card data from local storage
function loadCardData(currentUser) {
  const savedCardData = JSON.parse(localStorage.getItem(`cardData-${currentUser.id}`));
  if (savedCardData) {
    cardNumberInput.value = savedCardData.cardNumber || '';
    cardExpiryInput.value = savedCardData.expiry || '';
    cardCVCInput.value = savedCardData.cvc || '';
  }
}

// Create modal for payment
const modal = document.createElement("div");
modal.id = "paymentModal";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "1000";

const modalContent = document.createElement("div");
modalContent.style.backgroundColor = "#fff";
modalContent.style.padding = "20px";
modalContent.style.borderRadius = "5px";
modalContent.style.width = "90%";
modalContent.style.maxWidth = "400px";
modalContent.style.textAlign = "center";

const modalTitle = document.createElement("h5");
modalTitle.textContent = "Введите данные банковской карты";

// Card input fields
const cardNumberLabel = document.createElement("label");
cardNumberLabel.textContent = "Номер карты";
cardNumberLabel.style.display = "block";
const cardNumberInput = document.createElement("input");
cardNumberInput.type = "text";
cardNumberInput.placeholder = "1234 5678 9012";
cardNumberInput.style.width = "100%";
cardNumberInput.style.marginBottom = "10px";

const cardExpiryLabel = document.createElement("label");
cardExpiryLabel.textContent = "Срок действия (MM/YY)";
cardExpiryLabel.style.display = "block";
const cardExpiryInput = document.createElement("input");
cardExpiryInput.type = "text";
cardExpiryInput.placeholder = "MM/YY";
cardExpiryInput.style.width = "100%";
cardExpiryInput.style.marginBottom = "10px";

const cardCVCLabel = document.createElement("label");
cardCVCLabel.textContent = "CVC";
cardCVCLabel.style.display = "block";
const cardCVCInput = document.createElement("input");
cardCVCInput.type = "text";
cardCVCInput.placeholder = "123";
cardCVCInput.style.width = "100%";
cardCVCInput.style.marginBottom = "20px";

// Error message
const errorMessage = document.createElement("div");
errorMessage.style.color = "red";
errorMessage.style.marginBottom = "10px";
errorMessage.style.display = "none";

// Close and confirm buttons
const closeButton = document.createElement("button");
closeButton.textContent = "Закрыть";
closeButton.style.marginRight = "10px";
closeButton.onclick = () => {
  modal.style.display = "none";
};

const confirmPaymentButton = document.createElement("button");
confirmPaymentButton.textContent = "Оплатить";
confirmPaymentButton.onclick = () => {
  const cardNumber = cardNumberInput.value.replace(/\s+/g, '');
  const expiry = cardExpiryInput.value;
  const cvc = cardCVCInput.value;
  errorMessage.style.display = "none";

  // Validate card number (12 digits)
  if (!/^\d{12}$/.test(cardNumber)) {
    errorMessage.textContent = "Номер карты должен содержать 12 цифр.";
    errorMessage.style.display = "block";
    return;
  }

  // Validate expiry date (not expired)
  const [month, year] = expiry.split('/');
  const currentDate = new Date();
  const expiryDate = new Date(`20${year}`, month - 1);
  if (!month || !year || isNaN(month) || isNaN(year) || expiryDate < currentDate || month < 1 || month > 12) {
    errorMessage.textContent = "Срок действия неверен или просрочен.";
    errorMessage.style.display = "block";
    return;
  }

  // Validate CVC (3 digits)
  if (!/^\d{3}$/.test(cvc)) {
    errorMessage.textContent = "CVC должен содержать 3 цифры.";
    errorMessage.style.display = "block";
    return;
  }

  // If all data is valid, create the order
  const newOrder = {
    id: ORDERS_FROM_DB.length + 1, // Generate a new unique id
    userId: USER_LOGGED_IN,
    uniqueNum: `#${Math.floor(Math.random() * 100000000)}`, // Random unique order number
    itemIds: itemIdsInCartForUser,
    date: new Date().toLocaleDateString("en-GB") // Current date in "dd-mm-yyyy" format
  };

  // Add new order to ORDERS_FROM_DB array
  ORDERS_FROM_DB.push(newOrder);

  // Store the order in local storage
  const existingOrders = JSON.parse(localStorage.getItem(`userOrders-${USER_LOGGED_IN}`)) || [];
  existingOrders.push(newOrder);
  localStorage.setItem(`userOrders-${USER_LOGGED_IN}`, JSON.stringify(existingOrders));

  // Clear the cart
  const userCart = DB.cart_items.find(user => user.id === USER_LOGGED_IN);
  if (userCart) {
    userCart.cart = []; // Clear the cart
  }

  alert("Оплата успешно проведена!");
  modal.style.display = "none";
  itemCartList.innerHTML = ''; // Clear the displayed items in the cart
};

// Append inputs and buttons to modal content
modalContent.appendChild(modalTitle);
modalContent.appendChild(cardNumberLabel);
modalContent.appendChild(cardNumberInput);
modalContent.appendChild(cardExpiryLabel);
modalContent.appendChild(cardExpiryInput);
modalContent.appendChild(cardCVCLabel);
modalContent.appendChild(cardCVCInput);
modalContent.appendChild(errorMessage);
modalContent.appendChild(closeButton);
modalContent.appendChild(confirmPaymentButton);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Show modal when the pay button is clicked
payButton.onclick = () => {
  loadCardData(currentUser);
  modal.style.display = "flex";
};

// Close modal if user clicks outside of it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
