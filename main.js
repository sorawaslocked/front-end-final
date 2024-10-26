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

      // Ограничиваем до последних 3 заказов
      const lastThreeOrders = userOrders.slice(0, 3);

      // Получаем все элементы с классом order-number
      const orderElements = document.querySelectorAll(".order-number");

      // Заполняем элементы последними 3 заказами
      lastThreeOrders.forEach((order, index) => {
          if (index < orderElements.length) {
              orderElements[index].innerText = order.uniqueNum;
          }
      });

      // Если заказов нет, выводим сообщение
      if (lastThreeOrders.length === 0) {
          orderElements.forEach(orderElement => {
              orderElement.innerText = 'Нет заказов';
          });
      }
  } else {
      console.log("Пользователь не найден.");
  }
});
