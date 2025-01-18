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