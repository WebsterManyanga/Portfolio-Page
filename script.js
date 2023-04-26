const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.top-nav');
const menuLinks = menuBar.children;

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', menuSlide);
}

menuBtn.addEventListener('click', menuSlide);

function menuSlide() {
  if (menuBtn.firstElementChild.classList.contains('fa-bars')) {
      menuBtn.firstElementChild.classList.remove('fa-bars');
      menuBtn.firstElementChild.classList.add('fa-house');
      menuBar.style.transform = 'translateX(0)';
      
  } else {
      menuBtn.firstElementChild.classList.remove('fa-house');
      menuBtn.firstElementChild.classList.add('fa-bars');
      menuBar.style.transform = 'translateX(-100vw)';
  }

}