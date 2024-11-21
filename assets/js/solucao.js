const carousels = [
    { id: 'carousel-1', currentIndex: 0 },
    { id: 'carousel-2', currentIndex: 0 },
  ];
  
  function moveCarousel(carouselIndex, direction) {
    const carousel = document.getElementById(carousels[carouselIndex].id);
    const totalCards = carousel.querySelectorAll('.card').length;
  
    carousels[carouselIndex].currentIndex += direction;
  
    if (carousels[carouselIndex].currentIndex < 0) {
      carousels[carouselIndex].currentIndex = totalCards - 1;
    } else if (carousels[carouselIndex].currentIndex >= totalCards) {
      carousels[carouselIndex].currentIndex = 0;
    }
  
    const offset = -carousels[carouselIndex].currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }
  