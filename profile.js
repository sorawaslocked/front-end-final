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

  // Получаем заказы текущего пользователя
  const userOrders = ORDERS_FROM_DB.filter(order => order.userId === currentUser.id);

  // Сортируем заказы по дате (или уникальному номеру) в порядке убывания
  userOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Получаем все элементы с классом order-number
  const orderElements = document.querySelectorAll(".order-number");

  // Заполняем элементы последними заказами
  orderElements.forEach((orderElement, index) => {
    if (index < userOrders.length) {
      const order = userOrders[index];
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
  if (userOrders.length < 3) {
    const orderList = document.getElementById("order-list");
    const orderItems = orderList.querySelectorAll(".order-item");
    for (let i = userOrders.length; i < orderItems.length; i++) {
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
      // Сохранение изменений
      userName.innerText = editUserName.value;
      userEmail.innerText = editUserEmail.value;
      userPhone.innerText = editUserPhone.value;
      userAddress.innerText = editUserAddress.value;

      // Сохраняем данные в локальное хранилище
      const userData = {
        id: currentUser.id, // Сохраняем ID пользователя
        name: userName.innerText,
        email: userEmail.innerText,
        phone: userPhone.innerText,
        address: userAddress.innerText
      };
      localStorage.setItem(`userData_${currentUser.id}`, JSON.stringify(userData)); // Используем ID пользователя как ключ

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
  const storedUserData = JSON.parse(localStorage.getItem(`userData_${currentUser.id}`)); // Используем ID пользователя как ключ
  if (storedUserData) {
    document.getElementById("user-name").innerText = storedUserData.name || currentUser.name || 'Не указано';
    document.getElementById("user-email").innerText = storedUserData.email || currentUser.email || 'Не указано';
    document.getElementById("user-phone").innerText = storedUserData.phone || currentUser.phone || 'Не указано';
    document.getElementById("user-address").innerText = storedUserData.address || currentUser.address || 'Не указано';
  } else {
    document.getElementById("user-name").innerText = currentUser.name || 'Не указано';
    document.getElementById("user-email").innerText = currentUser.email || 'Не указано';
    document.getElementById("user-phone").innerText = currentUser.phone || 'Не указано';
    document.getElementById("user-address").innerText = currentUser.address || 'Не указано';
  }
}

const logoutButton = document.querySelector(".btn.btn-danger");
if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    // Удаляем данные из локального хранилища при выходе
    const storedUserData = JSON.parse(localStorage.getItem(`userData_${currentUser.id}`));
    if (storedUserData) {
      localStorage.removeItem(`userData_${currentUser.id}`); // Удаляем данные пользователя из локального хранилища
    }
    
    sessionStorage.removeItem('loggedId'); // Удаляем ID из sessionStorage
    window.location.href = "index.html"; // Перенаправляем на главную страницу
  });
}

// Остальной код остаётся без изменений
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
  modalWindow.style.maxWidth = '400px';
  modalWindow.style.width = '90%';
  modalWindow.style.maxHeight = '500px'; // Фиксированная высота
  modalWindow.style.overflowY = 'auto'; // Прокрутка по вертикали
  modalWindow.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

  // Добавляем содержимое
  const content = document.createElement('div');
  const itemCount = {};

  // Считаем количество для каждого товара
  order.itemIds.forEach(itemId => {
    itemCount[itemId] = (itemCount[itemId] || 0) + 1;
  });

  // Создаем информацию о каждом товаре в заказе
  const itemsInfo = Object.keys(itemCount).map(itemId => {
    const item = ITEMS_FROM_DB.find(i => i.id === parseInt(itemId));
    if (item) {
      const quantity = itemCount[itemId];
      const totalPrice = item.price * quantity; // Общая цена для товара
      return `
        <div>
          <h6>${item.description}</h6>
          <p style="font-size:15px">Количество: ${quantity}</p>
          <p style="font-size:15px">Цена за единицу: ${item.price} тг</p>
          <p style="font-size:15px">Общая цена: ${totalPrice} тг</p>
          <img src="${item.imageUrl}" alt="${item.description}" style="width: auto; height: 130px;">
          <hr>
        </div>
      `;
    }
    return '';
  }).join('');

  // Добавляем информацию о заказе
  const totalOrderPrice = order.itemIds.reduce((total, itemId) => {
    const item = ITEMS_FROM_DB.find(i => i.id === parseInt(itemId));
    return total + (item ? item.price : 0);
  }, 0);

  content.innerHTML = `
    <h3>Состав заказа</h3>
    ${itemsInfo}
    <p>Дата заказа: ${order.date}</p>
    <h4>Общая стоимость заказа: ${totalOrderPrice} тг</h4>
  `;

  // Создаем кнопку для закрытия
  const closeButton = document.createElement('button');
  closeButton.innerText = 'Закрыть';
  closeButton.style.background = '#007bff';
  closeButton.style.color = 'white';
  closeButton.style.border = 'none';
  closeButton.style.padding = '8px 12px';
  closeButton.style.borderRadius = '4px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.float = 'right';

  // Закрытие окна при нажатии на кнопку "Закрыть"
  closeButton.addEventListener('click', function () {
    document.body.removeChild(overlay);
  });

  // Закрытие окна при нажатии на затемнённую область
  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      document.body.removeChild(overlay);
    }
  });

  // Добавляем элементы в модальное окно
  modalWindow.appendChild(closeButton);
  modalWindow.appendChild(content);
  overlay.appendChild(modalWindow);
  document.body.appendChild(overlay);
}
