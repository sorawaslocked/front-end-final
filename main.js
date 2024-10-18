function createNavbar() {
    // Get the navbar container where the header will be appended
    let header = document.createElement('header');

    // Create the navbar element with Bootstrap classes
    let navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-lg navbar-light bg-light';

    // Create the container for the navbar content
    let container = document.createElement('div');
    container.className = 'container-fluid';

    // Create the brand link
    let brand = document.createElement('a');
    brand.className = 'navbar-brand';
    brand.href = '#';
    brand.textContent = 'MyBrand';
    container.appendChild(brand);

    // Create a button for mobile toggle
    let toggleButton = document.createElement('button');
    toggleButton.className = 'navbar-toggler';
    toggleButton.type = 'button';
    toggleButton.setAttribute('data-bs-toggle', 'collapse');
    toggleButton.setAttribute('data-bs-target', '#navbarNav');
    toggleButton.setAttribute('aria-controls', 'navbarNav');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Toggle navigation');
    toggleButton.innerHTML = '<span class="navbar-toggler-icon"></span>';
    container.appendChild(toggleButton);

    // Create the collapsible section
    let navbarCollapse = document.createElement('div');
    navbarCollapse.className = 'collapse navbar-collapse';
    navbarCollapse.id = 'navbarNav';

    // Create the category dropdown
    let dropdown = document.createElement('ul');
    dropdown.className = 'navbar-nav me-auto mb-2 mb-lg-0';

    let dropdownItem = document.createElement('li');
    dropdownItem.className = 'nav-item dropdown';

    let dropdownLink = document.createElement('a');
    dropdownLink.className = 'nav-link dropdown-toggle';
    dropdownLink.href = '#';
    dropdownLink.id = 'categoryDropdown';
    dropdownLink.role = 'button';
    dropdownLink.setAttribute('data-bs-toggle', 'dropdown');
    dropdownLink.setAttribute('aria-expanded', 'false');
    dropdownLink.textContent = 'Categories';
    
    let dropdownMenu = document.createElement('ul');
    dropdownMenu.className = 'dropdown-menu';
    dropdownMenu.setAttribute('aria-labelledby', 'categoryDropdown');

    let category1 = document.createElement('li');
    category1.innerHTML = '<a class="dropdown-item" href="#">Category 1</a>';
    let category2 = document.createElement('li');
    category2.innerHTML = '<a class="dropdown-item" href="#">Category 2</a>';
    let category3 = document.createElement('li');
    category3.innerHTML = '<a class="dropdown-item" href="#">Category 3</a>';

    dropdownMenu.appendChild(category1);
    dropdownMenu.appendChild(category2);
    dropdownMenu.appendChild(category3);

    dropdownItem.appendChild(dropdownLink);
    dropdownItem.appendChild(dropdownMenu);
    dropdown.appendChild(dropdownItem);
    
    navbarCollapse.appendChild(dropdown);

    // Create the search bar form
    let form = document.createElement('form');
    form.className = 'd-flex';

    let searchInput = document.createElement('input');
    searchInput.className = 'form-control me-2';
    searchInput.type = 'search';
    searchInput.placeholder = 'Search';
    searchInput.setAttribute('aria-label', 'Search');

    let searchButton = document.createElement('button');
    searchButton.className = 'btn btn-outline-success';
    searchButton.type = 'submit';
    searchButton.innerHTML = '<i class="bi bi-search"></i>'; // Bootstrap Icons for search

    form.appendChild(searchInput);
    form.appendChild(searchButton);

    navbarCollapse.appendChild(form);

    // Create buttons for favorite, cart, and profile
    let favoriteButton = document.createElement('button');
    favoriteButton.className = 'btn btn-outline-primary me-2';
    favoriteButton.type = 'button';
    favoriteButton.innerHTML = '<i class="bi bi-heart"></i>'; // Favorite button with icon

    let cartButton = document.createElement('button');
    cartButton.className = 'btn btn-outline-secondary me-2';
    cartButton.type = 'button';
    cartButton.setAttribute('data-bs-toggle', 'collapse');
    cartButton.setAttribute('data-bs-target', '#cartContent');
    cartButton.innerHTML = '<i class="bi bi-cart"></i>'; // Cart button with icon

    let profileButton = document.createElement('button');
    profileButton.className = 'btn btn-outline-info me-2';
    profileButton.type = 'button';
    profileButton.innerHTML = '<i class="bi bi-person"></i>'; // Profile button with icon

    navbarCollapse.appendChild(favoriteButton);
    navbarCollapse.appendChild(cartButton);
    navbarCollapse.appendChild(profileButton);

    // Add collapsible cart content
    let cartContent = document.createElement('div');
    cartContent.className = 'collapse';
    cartContent.id = 'cartContent';
    cartContent.innerHTML = '<div class="card card-body">Your cart is empty</div>';

    container.appendChild(cartContent);

    // Append collapsible navbar content to container
    container.appendChild(navbarCollapse);

    // Append everything to the navbar
    navbar.appendChild(container);

    // Append the navbar to the header
    header.appendChild(navbar);

    // Append the header to the body
    document.body.prepend(header);
}

// Call the function to create and add the navbar
createNavbar();
