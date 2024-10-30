const tableBody = document.querySelector('table > tbody');

DB.users.forEach(user => {
  tableBody.append(createUserRow(user));
})