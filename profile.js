const currentUser = DB.users.find(user => user.id === USER_LOGGED_IN);

if (currentUser) {
  console.log("currentUser:", currentUser); // Проверяем данные пользователя
  
  // Загружаем данные пользователя из локального хранилища
  loadUserData(currentUser);

  // Проверяем, является ли пользователь администратором
  if (currentUser.id === 1) {
    // Создаем кнопку для перехода в панель администратора
    const adminButton = document.createElement('button');
    adminButton.innerText = "Перейти в панель администратора";
    adminButton.className = "btn btn-warning"; // Добавляем стили для кнопки
    adminButton.style.marginTop = '20px'; // Отступ сверху
    adminButton.addEventListener("click", () => {
      window.location.href = "admin_panel.html"; // Укажите путь к странице панели администратора
    });

    // Добавляем кнопку в контейнер
    const adminPanelContainer = document.getElementById("admin-panel-container");
    adminPanelContainer.appendChild(adminButton);
  }

  // Получаем заказы текущего пользователя из базы данных
  const userOrders = ORDERS_FROM_DB.filter(order => order.userId === currentUser.id);

  // Загружаем заказы из локального хранилища
  const existingOrders = JSON.parse(localStorage.getItem(`userOrders-${USER_LOGGED_IN}`)) || [];

  // Смешиваем заказы из БД и локального хранилища
  const allUserOrders = [...userOrders, ...existingOrders].filter((order, index, self) =>
    index === self.findIndex(o => o.uniqueNum === order.uniqueNum)
  );

  // Сортируем все заказы по дате в порядке убывания
  allUserOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Ограничиваем количество отображаемых заказов до трех последних
  const recentOrders = allUserOrders.slice(0, 3);

  // Получаем все элементы с классом order-number
  const orderElements = document.querySelectorAll(".order-number");

  // Заполняем элементы последними заказами
  orderElements.forEach((orderElement, index) => {
    if (index < recentOrders.length) {
      const order = recentOrders[index];
      orderElement.innerText = order.uniqueNum;

      // Добавляем обработчик события для кнопки "Показать"
      const showButton = orderElement.parentElement.querySelector(".btn.btn-primary");
      showButton.addEventListener("click", () => {
        displayOrderDetails(order);
      });
    } else {
      orderElement.innerText = 'Нет заказов'; // Если больше нет заказов
    }
  });

  // Удаляем лишние строки, если меньше 3 заказов
  if (recentOrders.length < 3) {
    const orderList = document.getElementById("order-list");
    const orderItems = orderList.querySelectorAll(".order-item");
    for (let i = recentOrders.length; i < orderItems.length; i++) {
      orderList.removeChild(orderItems[i]);
    }
  }

  // Событие для кнопки редактирования
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
      // Переключение на режим редактирования
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
      // Валидация данных
      if (!validateEmail(editUserEmail.value)) {
        alert("Некорректный email!");
        return;
      }
      if (!validatePhone(editUserPhone.value)) {
        alert("Некорректный номер телефона! Пример: +77783390355");
        return;
      }

      // Сохранение изменений
      userName.innerText = editUserName.value;
      userEmail.innerText = editUserEmail.value;
      userPhone.innerText = editUserPhone.value;
      userAddress.innerText = editUserAddress.value;

      currentUser.name = userName.innerText;
      currentUser.email = userEmail.innerText;
      currentUser.phone = userPhone.innerText;
      currentUser.address = userAddress.innerText;

      // Сохраняем обновленные данные в локальном хранилище
      localStorage.setItem('db', JSON.stringify(DB));

      userName.style.display = 'block';
      userEmail.style.display = 'block';
      userPhone.style.display = 'block';
      userAddress.style.display = 'block';

      editUserName.style.display = 'none';
      editUserEmail.style.display = 'none';
      editUserPhone.style.display = 'none';
      editUserAddress.style.display = 'none';

      editButton.innerText = "Редактировать";
    }
  });
} else {
  console.log("Пользователь не найден.");
}

// Функция для загрузки данных пользователя из локального хранилища
function loadUserData(currentUser) {
  document.getElementById("user-name").innerText = currentUser.name || 'Не указано';
  document.getElementById("user-email").innerText = currentUser.email || 'Не указано';
  document.getElementById("user-phone").innerText = currentUser.phone || 'Не указано';
  document.getElementById("user-address").innerText = currentUser.address || 'Не указано';
}

const logoutButton = document.querySelector(".btn.btn-danger");
if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    sessionStorage.removeItem('loggedId'); // Удаляем ID из sessionStorage
    window.location.href = "index.html"; // Перенаправляем на главную страницу
  });
}

// Валидация email
function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return pattern.test(email);
}

// Валидация телефона (формат +77783390355)
function validatePhone(phone) {
  const pattern = /^\+7\d{10}$/;  // Строгий формат: +7 и 10 цифр
  return pattern.test(phone);
}

// Функция для отображения товаров из истории заказов
function displayOrderDetails(order) {
  // Создаем затемненный фон
  const overlay = document.createElement('div');
  overlay.id = 'modal-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.background = 'rgba(0, 0, 0, 0.5)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '1000';

  // Создаем окно
  const modalWindow = document.createElement('div');
  modalWindow.style.background = 'white';
  modalWindow.style.padding = '20px';
  modalWindow.style.borderRadius = '8px';
  modalWindow.style.maxWidth = '800px';
  modalWindow.style.width = '90%';
  modalWindow.style.maxHeight = '600px'; // Фиксированная высота
  modalWindow.style.overflowY = 'auto'; // Прокрутка по вертикали
  modalWindow.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

  // Добавляем содержимое
  const content = document.createElement('div');
  const itemCount = {};

  // Считаем количество для каждого товара
  order.itemIds.forEach(itemId => {
    itemCount[itemId] = (itemCount[itemId] || 0) + 1;
  });

  // Создаем карточки для каждого товара в заказе
  const itemsInfo = Object.keys(itemCount).map(itemId => {
    const item = ITEMS_FROM_DB.find(i => i.id === parseInt(itemId));

    if (item) {
      const quantity = itemCount[itemId];
      const totalPrice = item.price * quantity; // Общая цена для товара
      return `
        <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; width: 200px; margin: 10px; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; text-align: center;">
          <img src="${item.imageUrl}" alt="${item.description}" style="width: 100%; height: 150px; object-fit: cover;">
          <div style="padding: 10px;">
            <h6 style="font-size: 16px;">${item.description}</h6>
            <p style="font-size: 14px;">Количество: ${quantity}</p>
            <p style="font-size: 14px;">Цена за единицу: ${item.price} тг</p>
            <p style="font-size: 14px;">Общая цена: ${totalPrice} тг</p>
          </div>
        </div>
      `;
    } else {
      return `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 200px; margin: 10px; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; text-align: center;">
          <p style="font-size: 16px; color: red;">Товар не найден</p>
        </div>
      `;
    }
  }).join('');

  // Добавляем информацию о заказе
  const totalOrderPrice = order.itemIds.reduce((total, itemId) => {
    const item = ITEMS_FROM_DB.find(i => i.id === parseInt(itemId));
    return total + (item ? item.price : 0);
  }, 0);

  content.innerHTML = `
    <h4>Детали заказа</h4>
    <p>Номер заказа: ${order.uniqueNum}</p>
    <p>Дата: ${new Date(order.date).toLocaleString()}</p>
    <h5>Содержимое заказа:</h5>
    <div style="display: flex; flex-wrap: wrap; justify-content: center;">
      ${itemsInfo}
    </div>
    <strong>Общая стоимость: ${totalOrderPrice} тг</strong>
    <button id="close-modal" class="btn btn-secondary" style="margin-top: 20px;">Закрыть</button>
  `;

  modalWindow.appendChild(content);
  overlay.appendChild(modalWindow);
  document.body.appendChild(overlay);

  // Закрытие окна по кнопке
  document.getElementById('close-modal').addEventListener('click', () => {
    document.body.removeChild(overlay);
  });

  // Закрытие окна при клике вне его
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });
}
