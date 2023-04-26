const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', menuSlide);

function menuSlide() {
  if (menuBtn.firstElementChild.classList.contains('fa-bars')) {
      menuBtn.firstElementChild.classList.remove('fa-bars');
      menuBtn.firstElementChild.classList.add('fa-house');
  } else {
      menuBtn.firstElementChild.classList.remove('fa-house');
      menuBtn.firstElementChild.classList.add('fa-bars');

  }

}