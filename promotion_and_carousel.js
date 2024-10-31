document.addEventListener('DOMContentLoaded', function() {
  const promotionsCarousel = document.getElementById('promotionsCarousel');
  const carouselInner = promotionsCarousel.querySelector('.carousel-inner');

  const promotionImages = [
    { src: "images/promotions.png", alt: "Акция 1" },
    { src: "images/scale_1200.png", alt: "Акция 2" }
  ];
  
  let currentSlide = 0;
  let slideInterval;

  // Отображение слайда
  function showSlide(index) {
    // Удаление всех слайдов
    carouselInner.innerHTML = '';

    // Создание нового слайда
    const slide = document.createElement('div');
    slide.className = 'carousel-item active';
    slide.innerHTML = `<img class="promotions-img" src="${promotionImages[index].src}" alt="${promotionImages[index].alt}">`;
    carouselInner.appendChild(slide);
  }

  // Переключение слайдов
  function nextSlide() {
    currentSlide = (currentSlide + 1) % promotionImages.length;
    showSlide(currentSlide);
  }

  // Инициализация слайдера
  showSlide(currentSlide);

  // Автоматическая смена слайдов каждые 10 секунд
  slideInterval = setInterval(nextSlide, 10000); // 10000 мс = 10 секунд

  // Обработка свайпов на мобильных устройствах
  let startX;
  promotionsCarousel.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX; // Запоминаем начальную позицию свайпа
  });

  promotionsCarousel.addEventListener('touchmove', function(event) {
    const moveX = event.touches[0].clientX;
    const diffX = startX - moveX;

    if (Math.abs(diffX) > 30) { // Проверка на достаточно длинный свайп
      clearInterval(slideInterval); // Останавливаем автоматическую смену слайдов
      if (diffX > 0) {
        nextSlide(); // Свайп влево
      } else {
        currentSlide = (currentSlide - 1 + promotionImages.length) % promotionImages.length; // Свайп вправо
        showSlide(currentSlide);
      }
      slideInterval = setInterval(nextSlide, 10000); // Запускаем автоматическую смену слайдов снова
    }
  });

  // Обработка кликов мыши
  let isDragging = false;
  promotionsCarousel.addEventListener('mousedown', function(event) {
    startX = event.clientX; // Запоминаем начальную позицию
    isDragging = true;
  });

  promotionsCarousel.addEventListener('mousemove', function(event) {
    if (!isDragging) return;
    const moveX = event.clientX;
    const diffX = startX - moveX;

    if (Math.abs(diffX) > 30) { // Проверка на достаточно длинный свайп
      clearInterval(slideInterval); // Останавливаем автоматическую смену слайдов
      if (diffX > 0) {
        nextSlide(); // Свайп влево
      } else {
        currentSlide = (currentSlide - 1 + promotionImages.length) % promotionImages.length; // Свайп вправо
        showSlide(currentSlide);
      }
      slideInterval = setInterval(nextSlide, 10000); // Запускаем автоматическую смену слайдов снова
      isDragging = false; // Сбрасываем состояние
    }
  });

  promotionsCarousel.addEventListener('mouseup', function(event) {
    isDragging = false; // Сбрасываем состояние при отпускании кнопки мыши
  });
  const newItemsGrid = document.getElementById('newItemsGrid');
  const salesGrid = document.getElementById('salesGrid');

  // Функция отображения товаров новинок
  function displayNewItems(items) {
    items.forEach(item => {
      const itemCard = createItemCard(item); // Создаем карточку через createItemCard из item_card.js
      newItemsGrid.appendChild(itemCard);
    });
  }

  // Функция отображения товаров со скидкой
  function displayDiscountedItems(items) {
    items.forEach(item => {
      if (item.discountPercent > 0) {
        const itemCard = createItemCard(item); // Создаем карточку через createItemCard из item_card.js
        salesGrid.appendChild(itemCard);
      }
    });
  }

  // Добавление новинок и скидок
  displayNewItems(DB.items.slice(0, 10)); // Отображаем первые 10 новинок
  displayDiscountedItems(DB.items.filter(item => item.discountPercent > 0));
});
