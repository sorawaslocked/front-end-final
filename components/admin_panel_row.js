function createUserRow(user) {
  // Create the table row element
  const row = document.createElement("tr");
  row.className = "text-center align-middle";

  // Helper function to create table cells with text inputs
  function createCell(value, isReadOnly = false) {
    const cell = document.createElement("td");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "form-control";
    input.value = value;
    input.readOnly = isReadOnly;
    cell.appendChild(input);
    return cell;
  }

// Creating individual cells as variables
  const idCell = createCell(user.id, true); // ID is read-only
  const nameCell = createCell(user.name);
  const emailCell = createCell(user.email);
  const phoneCell = createCell(user.phone);
  const passwordCell = createCell(user.password);
  const addressCell = createCell(user.address);

// Append cells to the row
  row.appendChild(idCell);
  row.appendChild(nameCell);
  row.appendChild(emailCell);
  row.appendChild(phoneCell);
  row.appendChild(passwordCell);
  row.appendChild(addressCell);

  // Action buttons cell
  const actionCell = document.createElement("td");
  actionCell.className = "action-buttons d-flex justify-content-center gap-2";

  // Save button
  const saveButton = document.createElement("button");
  saveButton.className = "btn btn-success btn-sm";
  saveButton.textContent = "Сохранить";
  actionCell.appendChild(saveButton);

  saveButton.addEventListener("click", () => {
    const userFromDb = DB.users.data.find(u => user.id === u.id);

    const nameValue = nameCell.querySelector("input").value;
    const emailValue = emailCell.querySelector("input").value;
    const phoneValue = phoneCell.querySelector("input").value;
    const passwordValue = passwordCell.querySelector("input").value;
    const addressValue = addressCell.querySelector("input").value;

    userFromDb.name = nameValue;
    userFromDb.email = emailValue;
    userFromDb.phone = phoneValue;
    userFromDb.password = passwordValue;
    userFromDb.address = addressValue;

    localStorage.setItem('db', JSON.stringify(DB));
  });

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm";
  deleteButton.textContent = "Удалить";
  actionCell.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    DB.users.data = DB.users.data.filter(u => u.id !== user.id);
    localStorage.setItem('db', JSON.stringify(DB));
  })

  row.appendChild(actionCell);

  return row;
}