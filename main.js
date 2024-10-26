document.addEventListener("DOMContentLoaded", function () {
  const USER_LOGGED_IN = Number.parseInt(sessionStorage.getItem('loggedId')) || 0;

  console.log("USER_LOGGED_IN:", USER_LOGGED_IN); // Проверяем ID пользователя

  const currentUser = USERS_FROM_DB.find(user => user.id === USER_LOGGED_IN);

  if (currentUser) {
      console.log("currentUser:", currentUser); // Проверяем данные пользователя
      document.getElementById("user-name").innerText = currentUser.name;
      document.getElementById("user-email").innerText = currentUser.email;
      document.getElementById("user-phone").innerText = currentUser.phone;
      document.getElementById("user-address").innerText = currentUser.address;
  }
});
