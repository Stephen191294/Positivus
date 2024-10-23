function showSidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex"
}

function hideSidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none"
}


const sliderContainer = document.querySelector('.slider-container-1');
let isDown = false;
let startX;
let scrollLeft;

// Mouse or Touch start event
sliderContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - sliderContainer.offsetLeft;
  scrollLeft = sliderContainer.scrollLeft;
});

sliderContainer.addEventListener('mouseleave', () => {
  isDown = false;
});

sliderContainer.addEventListener('mouseup', () => {
  isDown = false;
});

sliderContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderContainer.offsetLeft;
  const walk = (x - startX) * 2; // The number of pixels to scroll
  sliderContainer.scrollLeft = scrollLeft - walk;
});

// For touch events
sliderContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = sliderContainer.scrollLeft;
});

sliderContainer.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (startX - x) * 2;
  sliderContainer.scrollLeft = scrollLeft + walk;
});
