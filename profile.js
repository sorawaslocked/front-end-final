const currentUser = DB.users.find(user => user.id === USER_LOGGED_IN);

if (currentUser) {
  console.log("currentUser:", currentUser); // Проверяем данные пользователя
  
  // Загружаем данные пользователя из локального хранилища
  loadUserData(currentUser);

  // Проверяем, является ли пользователь администратором
  if (currentUser.id === 1) {
    const adminButton = document.createElement('button');
    adminButton.innerText = "Перейти в панель администратора";
    adminButton.className = "btn btn-warning";
    adminButton.style.marginTop = '20px';
    adminButton.addEventListener("click", () => {
      window.location.href = "admin_panel.html";
    });
    const adminPanelContainer = document.getElementById("admin-panel-container");
    adminPanelContainer.appendChild(adminButton);
  }

  // Загружаем заказы текущего пользователя из базы данных
  const userOrders = ORDERS_FROM_DB.filter(order => order.userId === currentUser.id);
  const existingOrders = JSON.parse(localStorage.getItem(`userOrders-${USER_LOGGED_IN}`)) || [];
  const allUserOrders = [...userOrders, ...existingOrders].filter((order, index, self) =>
    index === self.findIndex(o => o.uniqueNum === order.uniqueNum)
  );
  allUserOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
  const recentOrders = allUserOrders.slice(0, 3);

  const orderElements = document.querySelectorAll(".order-number");
  orderElements.forEach((orderElement, index) => {
    if (index < recentOrders.length) {
      const order = recentOrders[index];
      orderElement.innerText = order.uniqueNum;
      const showButton = orderElement.parentElement.querySelector(".btn.btn-primary");
      showButton.addEventListener("click", () => {
        displayOrderDetails(order);
      });
    } else {
      orderElement.innerText = 'Нет заказов';
    }
  });

  if (recentOrders.length < 3) {
    const orderList = document.getElementById("order-list");
    const orderItems = orderList.querySelectorAll(".order-item");
    for (let i = recentOrders.length; i < orderItems.length; i++) {
      orderList.removeChild(orderItems[i]);
    }
  }

  const editButton = document.getElementById("edit-button");
  editButton.addEventListener("click", () => {
    const userName = document.getElementById("user-name");
    const userEmail = document.getElementById("user-email");
    const userPhone = document.getElementById("user-phone");
    const userAddress = document.getElementById("user-address");

    const editUserName = document.getElementById("edit-user-name");
    const editUserEmail = document.getElementById("edit-user-email");
    const editUserPhone = document.getElementById("edit-user-phone");
    const editUserAddress = document.getElementById("edit-user-address");

    if (editButton.innerText === "Редактировать") {
      userName.style.display = 'none';
      userEmail.style.display = 'none';
      userPhone.style.display = 'none';
      userAddress.style.display = 'none';

      editUserName.style.display = 'block';
      editUserEmail.style.display = 'block';
      editUserPhone.style.display = 'block';
      editUserAddress.style.display = 'block';

      editUserName.value = userName.innerText;
      editUserEmail.value = userEmail.innerText;
      editUserPhone.value = userPhone.innerText;
      editUserAddress.value = userAddress.innerText;

      editButton.innerText = "Сохранить";
    } else {
      userName.style.display = 'block';
      userEmail.style.display = 'block';
      userPhone.style.display = 'block';
      userAddress.style.display = 'block';

      editUserName.style.display = 'none';
      editUserEmail.style.display = 'none';
      editUserPhone.style.display = 'none';
      editUserAddress.style.display = 'none';

      userName.innerText = editUserName.value;
      userEmail.innerText = editUserEmail.value;
      userPhone.innerText = editUserPhone.value;
      userAddress.innerText = editUserAddress.value;

      editButton.innerText = "Редактировать";
    }
  });

  // Загружаем последние товары
  loadRecentProducts();
} else {
  alert("Не удалось найти данные пользователя.");
}

function loadUserData(user) {
  const userName = document.getElementById("user-name");
  const userEmail = document.getElementById("user-email");
  const userPhone = document.getElementById("user-phone");
  const userAddress = document.getElementById("user-address");

  userName.innerText = user.name || "Неизвестно";
  userEmail.innerText = user.email || "Неизвестно";
  userPhone.innerText = user.phone || "Неизвестно";
  userAddress.innerText = user.address || "Неизвестно";
}

function loadRecentProducts() {
  const recentProductsList = document.getElementById("recent-products-list");
  const recentOrders = allUserOrders.slice(0, 3);
  
  const productIds = new Set();
  recentOrders.forEach(order => {
    order.itemIds.forEach(itemId => {
      productIds.add(itemId);
    });
  });

  productIds.forEach(itemId => {
    const item = ITEMS_FROM_DB.find(i => i.id === itemId);
    if (item) {
      const productCard = document.createElement("div");
      productCard.className = "col-12 col-md-4 col-lg-3 col-xl-2";

      productCard.innerHTML = `
        <div class="card mb-3">
          <img src="${item.imageUrl}" class="card-img-top" alt="${item.description}">
          <div class="card-body">
            <h6 class="card-title">${item.description}</h6>
            <p class="card-text">Цена: ${item.price} тг</p>
          </div>
        </div>
      `;

      recentProductsList.appendChild(productCard);
    }
  });
}

function displayOrderDetails(order) {
  alert(`Детали заказа ${order.uniqueNum}: ${JSON.stringify(order)}`);
}
