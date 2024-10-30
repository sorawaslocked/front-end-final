function createLikedItemCard(item) {
  // Create outer column div
  const colDiv = document.createElement("div");
  colDiv.className = "col d-flex justify-content-center";

  // Create card container
  const cardDiv = document.createElement("div");
  cardDiv.className = "card position-relative";

  // Create and add product image
  const img = document.createElement("img");
  img.src = item.imageUrl;
  img.className = "card-img-top item-image";
  cardDiv.appendChild(img);

  // Create card body
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // Product description
  const description = document.createElement("p");
  description.className = "card-text";
  description.textContent = item.description;
  cardBody.appendChild(description);

  // Append card body to card
  cardDiv.appendChild(cardBody);

  let isLiked = false;
  let likedForUser;

  if (USER_LOGGED_IN !== 0) {
    likedForUser = DB.liked_items.find(user => user.id === USER_LOGGED_IN);
    isLiked = likedForUser.likedItems.includes(item.id);
  }

  const likeButton = document.createElement("button");
  likeButton.className = "btn btn-sm position-absolute top-0 end-0 m-2";
  likeButton.style.backgroundColor = "transparent"; // Transparent background
  likeButton.style.border = "none"; // No border for cleaner look
  likeButton.style.color = isLiked ? "red" : "gray"; // Red if liked, gray if unliked
  likeButton.style.fontSize = "1.5rem"; // Adjust icon size
  likeButton.className = "btn btn-light btn-sm position-absolute top-0 end-0 m-2";
  likeButton.innerHTML = `<i class="bi bi-heart"></i>`; // Bootstrap heart icon
  likeButton.style.fontSize = "1.5rem"; // Adjust icon size
  likeButton.innerHTML = `<i class="bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'}"></i>`;
  likeButton.onclick = function() {
    isLiked = !isLiked; // Toggle the isLiked state

    // Update the button icon and color based on the new state
    likeButton.innerHTML = `<i class="bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'}"></i>`;
    likeButton.style.color = isLiked ? "red" : "gray";

    if (likedForUser == null) {
      return;
    }

    if (isLiked) {
      likedForUser.likedItems.push(item.id);
      localStorage.setItem('db', JSON.stringify(DB));
    } else {
      likedForUser.likedItems = likedForUser.likedItems.filter(id => id !== item.id);
      localStorage.setItem('db', JSON.stringify(DB));
    }
  };

  cardDiv.appendChild(likeButton);

  // Append card to outer column div
  colDiv.appendChild(cardDiv);

  return colDiv;
}