function showSidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex"
}

function hideSidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none"
}


const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const totalItems = items.length;

function updateCarouselPosition() {
  const offset = -currentIndex * 100; // Move carousel by 100% for each item
  carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
  updateCarouselPosition();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
  updateCarouselPosition();
});

new WOW().init();







function showTeam() {
  const teamMemberOne = document.getElementById('teamBoxOne')
  teamMemberOne.style.display = 'block';

  const teamMemberTwo = document.getElementById('teamBoxTwo')
  teamMemberTwo.style.display = 'block';
}

