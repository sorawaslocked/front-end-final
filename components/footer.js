// Function to create the footer
function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "py-4";

  const container = document.createElement("div");
  container.className = "container py-4 px-5";
  footer.appendChild(container);

  const row = document.createElement("div");
  row.className = "row";
  container.appendChild(row);

  const logoCol = createLogoColumn();
  row.appendChild(logoCol);

  const infoCol = createInfoColumn();
  row.appendChild(infoCol);

  const contactCol = createContactColumn();
  row.appendChild(contactCol);

  const authorsCol = createAuthorsColumn();
  row.appendChild(authorsCol);

  return footer;
}

// Create the logo column
function createLogoColumn() {
  const col = document.createElement("div");
  col.className = "col-lg-2 mb-3";

  const logoLink = document.createElement("a");
  logoLink.className = "navbar-brand nav-link foodmart-logo";
  logoLink.href = "index.html";
  logoLink.textContent = "FoodMart";

  const list = document.createElement("ul");
  list.className = "list-unstyled small";
  const listItem = document.createElement("li");
  listItem.className = "mb-2";
  listItem.textContent = "Онлайн магазин продуктов";

  list.appendChild(listItem);
  col.appendChild(logoLink);
  col.appendChild(list);
  
  return col;
}

// Create the information column
function createInfoColumn() {
  const col = document.createElement("div");
  col.className = "col-6 col-lg-3 offset-lg-2";

  const heading = document.createElement("h5");
  heading.textContent = "Информация";

  const list = document.createElement("ul");
  list.className = "list-unstyled";

  const links = [
    "Спецпредложения",
    "Условия пользования",
    "Вакансии",
    "О нас",
    "FAQ",
  ];

  links.forEach(linkText => {
    const listItem = document.createElement("li");
    listItem.className = "mb-2";
    const link = document.createElement("a");
    link.href = "";
    link.textContent = linkText;
    listItem.appendChild(link);
    list.appendChild(listItem);
  });

  col.appendChild(heading);
  col.appendChild(list);

  return col;
}

// Create the contacts column
function createContactColumn() {
  const col = document.createElement("div");
  col.className = "col-sm-6 col-lg-3";

  const heading = document.createElement("h5");
  heading.textContent = "Контакты";

  const list = document.createElement("ul");
  list.className = "list-unstyled";

  const contacts = [
    { icon: "bi-envelope", text: "info@foodmart.kz" },
    { icon: "bi-envelope", text: "offer@foodmart.kz" },
    { icon: "bi-envelope", text: "marketing@foodmart.kz" },
    { icon: "bi-telephone", text: "+7 (777) 777-77-77" },
  ];

  contacts.forEach(contact => {
    const listItem = document.createElement("li");
    listItem.className = "mb-2";
    const icon = document.createElement("i");
    icon.className = `bi ${contact.icon} me-2`;
    listItem.appendChild(icon);
    listItem.appendChild(document.createTextNode(contact.text));
    list.appendChild(listItem);
  });

  col.appendChild(heading);
  col.appendChild(list);

  return col;
}

// Create the authors column
function createAuthorsColumn() {
  const col = document.createElement("div");
  col.className = "col-6 col-lg-2";

  const heading = document.createElement("h5");
  heading.textContent = "Авторы";

  const list = document.createElement("ul");
  list.className = "list-unstyled";

  const authors = [
    "Nurali Iskakov",
    "Nurgissa Beknazarov",
    "Yerassyl Temirkhan",
  ];

  authors.forEach(author => {
    const listItem = document.createElement("li");
    listItem.className = "mb-2";
    listItem.textContent = author;
    list.appendChild(listItem);
  });

  col.appendChild(heading);
  col.appendChild(list);

  return col;
}

// Add footer to the DOM on load
document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer-container"); // Ensure you have a div with this ID in your HTML
  if (footerContainer) {
    footerContainer.appendChild(createFooter());
  }
});
