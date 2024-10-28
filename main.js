document.addEventListener("DOMContentLoaded", function () {
    const USER_LOGGED_IN = Number.parseInt(sessionStorage.getItem('loggedId')) || 0;

    console.log("USER_LOGGED_IN:", USER_LOGGED_IN); // Проверяем ID пользователя

    const currentUser = USERS_FROM_DB.find(user => user.id === USER_LOGGED_IN);

    if (currentUser) {
        console.log("currentUser:", currentUser); // Проверяем данные пользователя
        document.getElementById("user-name").innerText = currentUser.name || 'Не указано';
        document.getElementById("user-email").innerText = currentUser.email || 'Не указано';
        document.getElementById("user-phone").innerText = currentUser.phone || 'Не указано';
        document.getElementById("user-address").innerText = currentUser.address || 'Не указано';

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

    } else {
        console.log("Пользователь не найден.");
    }

    const logoutButton = document.querySelector(".btn.btn-danger");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem('loggedId'); // Удаляем ID из sessionStorage
            window.location.href = "index.html"; // Перенаправляем на главную страницу
        });
    }

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
});
