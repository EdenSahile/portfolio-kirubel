const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__list a'); // Sélectionne tous les liens dans la liste

// Écouteur d'événements pour le bouton hamburger
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); // Ajoute ou retire la classe active
});

// Ajoute un écouteur d'événements à chaque lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active'); // Retire la classe active pour fermer le menu
    });
});



const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider__item');
const leftArrow = document.querySelector('.slider__arrow--left');
const rightArrow = document.querySelector('.slider__arrow--right');

let currentIndex = 0;

// Affiche la slide correspondante
function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Navigation avec les flèches
leftArrow.addEventListener('click', () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : sliderItems.length - 1;
  showSlide(currentIndex);
});

rightArrow.addEventListener('click', () => {
  currentIndex = currentIndex < sliderItems.length - 1 ? currentIndex + 1 : 0;
  showSlide(currentIndex);
});

// Redirection en cliquant sur une image
sliderItems.forEach(item => {
  item.addEventListener('click', () => {
    const url = item.getAttribute('data-url');
    if (url) window.location.href = url;
  });
});

// Initialisation
showSlide(currentIndex);
