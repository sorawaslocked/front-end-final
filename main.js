const DB_FROM_LOCAL_JSON = localStorage.getItem("db");
const DB = DB_FROM_LOCAL_JSON ? JSON.parse(DB_FROM_LOCAL_JSON) : fakeDb;
const USER_LOGGED_IN = Number.parseInt(sessionStorage.getItem('loggedId')) || 0;


console.log("USER_LOGGED_IN:", USER_LOGGED_IN); // Проверяем ID пользователя
const currentUser = USERS_FROM_DB.find(user => user.id === USER_LOGGED_IN);