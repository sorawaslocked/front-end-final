const tableBody = document.querySelector('table > tbody');

DB.users.data.forEach(user => {
  tableBody.append(createUserRow(user));
})