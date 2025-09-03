// Auto-scroll the featured carousel
const track = document.querySelector('.carousel-track');

setInterval(() => {
  track.scrollBy({ left: 320, behavior: 'smooth' });
}, 3000);

