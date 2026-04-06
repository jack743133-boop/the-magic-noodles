(function () {
  const carousel = document.getElementById('dishCarousel');
  if (!carousel) return;

  let direction = 1;
  setInterval(() => {
    if (carousel.scrollWidth <= carousel.clientWidth) return;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const next = carousel.scrollLeft + direction * 260;

    if (next >= maxScroll || next <= 0) {
      direction *= -1;
    }

    carousel.scrollTo({
      left: Math.max(0, Math.min(maxScroll, next)),
      behavior: 'smooth'
    });
  }, 3000);
})();
