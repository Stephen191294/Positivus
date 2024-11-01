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




function setupToggle(elementId, iconId, originalSrc, newSrc) {
  const actionStep = document.getElementById(elementId);
  const iconImage = document.getElementById(iconId);
  const lineElements = actionStep.querySelectorAll('.line'); // Scoped to this card only
  const cardTxtElements = actionStep.querySelectorAll('.card-txt'); 
  let isIconToggled = false;

  iconImage.src = originalSrc;

  actionStep.addEventListener('click', function () {
    if (isIconToggled) {
      actionStep.style.backgroundColor = '';
      iconImage.src = originalSrc;
      iconImage.alt = 'Original Image';
      iconImage.style.width = '28px';
      iconImage.style.height = '28px';

      // Hide elements with 'line' and 'card-txt' classes
      lineElements.forEach((line) => line.style.display = 'none');
      cardTxtElements.forEach((cardTxt) => cardTxt.style.display = 'none');
    } else {
      actionStep.style.backgroundColor = '#B9FF66';
      iconImage.src = newSrc;
      iconImage.alt = 'Toggle Image';
      iconImage.style.width = '28px';
      iconImage.style.height = '28px';

      // Show elements with 'line' and 'card-txt' classes
      lineElements.forEach((line) => line.style.display = 'block');
      cardTxtElements.forEach((cardTxt) => cardTxt.style.display = 'block');
    }
    isIconToggled = !isIconToggled;
  });
}

setupToggle('stepInfo', 'plusIcon', 'image/Icon(1).png', 'image/Negativeicon.png');
setupToggle('actionStep', 'toggleIcon', 'image/Icon(1).png', 'image/Negativeicon.png');
setupToggle('actionStep1', 'toggleIcon1', 'image/Icon(1).png', 'image/Negativeicon.png');
setupToggle('actionStep2', 'toggleIcon2', 'image/Icon(1).png', 'image/Negativeicon.png');
setupToggle('actionStep3', 'toggleIcon3', 'image/Icon(1).png', 'image/Negativeicon.png');
setupToggle('actionStep4', 'toggleIcon4', 'image/Icon(1).png', 'image/Negativeicon.png');


alert('this is an alert click ok')