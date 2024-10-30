const DB_FROM_LOCAL_JSON = localStorage.getItem("db");
const DB = DB_FROM_LOCAL_JSON ? JSON.parse(DB_FROM_LOCAL_JSON) : fakeDb;
const USER_LOGGED_IN = Number.parseInt(sessionStorage.getItem('loggedId')) || 0;