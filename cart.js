let itemIdsInCartForUser = [];

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
})

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